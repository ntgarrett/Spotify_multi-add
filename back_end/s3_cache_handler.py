import os
import errno
import json
import boto3
from botocore.client import Config
from spotipy import CacheHandler
from dotenv import load_dotenv

load_dotenv()
bucket_name = os.getenv('BUCKET')

class S3CacheHandler(CacheHandler):
    """
    Handles reading and writing cached Spotify authorization tokens
    as json files on disk.
    """
    def __init__(self, path):
      self.path = path
      config = Config(connect_timeout=5, retries={'max_attempts': 0})
      self.client = boto3.client('s3', config=config)

    def get_cached_token(self):
        token_info = None

        try:
          response = self.client.get_object(
            Bucket=bucket_name,
            Key=self.path,
          )
          token_info = json.loads(response['Body'].read().decode('utf-8'))
          
        except Exception as error:  
          print(f'Couldn\'t read s3 cache at: {self.path}')
          print(error)
        
        return token_info

    def save_token_to_cache(self, token_info):
        print(f'Putting object to: {self.path}')
        try:
          response = self.client.put_object(
              Body=json.dumps(token_info),
              Bucket=bucket_name,
              Key=self.path,
          )
          print(response)
        except Exception as error:
          print(f'Couldn\'t write token to s3 cache at: {self.path}')
          print(error)
    
    def delete_cached_token(self):
      print(f'Deleting object from: {self.path}')
      try:
        response = self.client.delete_object(
          Bucket=bucket_name,
          Key=self.path,
        )
        print(response)
      except Exception as error:
        print(f'Couldn\'t delete token from s3 cache at: {self.path}')
        print(error)