# Real Time Bus Tracker
Real Time Bus Tracker is a program that pulls real time longitude and latitude coordinates from a Massachusetts Bus Transportation Authority server. This particular bus route will travel from the Harvard's campus to MIT's campus.

The modifications that I've added to the original file are as follows:
- a customized color scheme to the map
- a button that triggers the function that pulls the coordinates from the data
- a customized bus icon instead of the default marker
- code that pulls only the coordinates from each bus stop in the data
- code that updates the bus marker's coordinates to follow the real time bus stops

## How it works
Click the yellow button in the top left corner to start the program. You will see the bus marker jump to the first stop. Every 12 seconds the bus will be updated with the next stop's coordinates. While the bus is being updated you may zoom in or out on the map. Keep in mind that because some bus stops are longer than others, the next location that is pulled may be a small to no change at all. The program will continue to pull data from the MBTA server for as long as you let it.  

In the future I hope to add some additional features to the project such as:
- a stop button to stop the program from grabbing new coordinates
- a hud or pop-up that displays the time of each stop
- multiple buses to represent all the buses on the route

MIT License

Copyright (c) 2021 Erik Rice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
