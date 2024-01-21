#!/bin/bash
case $1 in
"active")
    curl -s http://192.168.123.200:8080/status | awk 'NR==1{ print $3}';;
"accepts")
    curl -s http://192.168.123.200:8080/status | awk 'NR==3{ print $1}';;
"handled")
    curl -s http://192.168.123.200:8080/status | awk 'NR==1{ print $3}';;
"requests")
    curl -s http://192.168.123.200:8080/status | awk 'NR==1{ print $5}';;
"reading")
    curl -s http://192.168.123.200:8080/status | awk 'NR==4{ print $4}';;
"writing")
    curl -s http://192.168.123.200:8080/status | awk 'NR==4{ print $4}';;
"waiting")
    curl -s http://192.168.123.200:8080/status | awk 'NR==4{ print $6}';;
esac