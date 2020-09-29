"""
import urllib



link = "http://127.0.0.1:5000/gantt"
f = urllib.urlopen(link)
myfile = f.read


for i in myfile:
    print(i)
 
"""


from urllib.request import urlopen


link = "http://127.0.0.1:5000/gantt"
f = urlopen(link)
myfile = f.read()
print(myfile)