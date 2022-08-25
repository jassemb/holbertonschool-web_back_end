#!/usr/bin/env python3
"""
Python fPython function that changes all topics of a school document based on the name:
"""


def update_topics(mongo_collection, name, topics):
    """
    inserts a new document in a collection based on kwargs
    """
    if mongo_collection is None:
        return None
    return mongo_collection.update_many({'name': name}, {'$set': {'topics': topics}})
