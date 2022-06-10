#!/usr/bin/env python3
"""
measure the total runtime and return it.
"""
import time
import asyncio
from typing import List

async_generator = __import__('1-async_comprehension').async_generator


async def measure_runtime() -> float:
    """
    execute async_comprehension
    measure time.
    """
    time1 = time.time()
    await asyncio.gather(async_comprehension())
    time2 = time.time()
    total_t = time2 - time1
    return total_t
