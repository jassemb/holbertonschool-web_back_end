#!/usr/bin/env python3
"""
Redis basic
"""
import redis
from typing import Optional, Union, Callable
import uuid


class Cache():
    """Cache class"""

    def __init__(self):
        """Intizializer"""
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """
        method should generate a random key
        Return:
            Random generated key
        """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Optional[Callable]
            = None) -> Union[str, bytes, int, float]:
        data = self._redis.get(key)
        return data
