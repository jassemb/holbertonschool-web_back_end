#!/usr/bin/env python3
"""
type tuple
"""
from typing import List, Union, Tuple


def to_kv(k: str, v: [int, float]) -> Tuple[str, float]:
    """
    returns a tuple
    """
    return (k, v**2)
