#!/usr/bin/env python3
"""
module for the wait
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random




async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """return the list of all the delays (float values)"""
    delay_list: List[float] = []
    for i in range(n):
        delay_list.append(await task_wait_random(max_delay))
    return sorted(delay_list)
