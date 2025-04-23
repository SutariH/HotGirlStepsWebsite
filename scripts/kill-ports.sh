#!/bin/bash

# Function to kill process on a specific port
kill_port() {
    local port=$1
    local pid=$(lsof -ti:$port)
    if [ ! -z "$pid" ]; then
        echo "Killing process on port $port (PID: $pid)"
        kill -9 $pid
    else
        echo "No process found on port $port"
    fi
}

# Kill processes on common Next.js ports
kill_port 3000
kill_port 3001
kill_port 3002

echo "Port cleanup complete" 