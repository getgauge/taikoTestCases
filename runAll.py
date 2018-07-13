#!/bin/bash
import inspect, os,fnmatch
from subprocess import call

listOfFiles = os.listdir('.')  
pattern = "*.js"  
for entry in listOfFiles:  
    if fnmatch.fnmatch(entry, pattern):
            print (entry)
            call(["taiko",entry])
