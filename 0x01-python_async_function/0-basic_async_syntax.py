#!/usr/bin/env python3
import asyncio
import random
# The basics of using asyncio for asynchronous programming
async def wait_random(max_delay=10):
    # Generates a random delay between 0 and the specified maximum delay (10)
    delay = random.uniform(0, max_delay)
    # Asynchronously waits for the specified delay
    await asyncio.sleep(delay)
    # Returns the delay value
    return delay
