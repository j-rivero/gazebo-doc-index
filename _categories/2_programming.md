---
# Contribution guidelines:
# https://github.com/j-rivero/gazebo-doc-index/blob/master/CONTRIBUTING.md

title: Programming with Gazebo
desc: Developing code that uses the Gazebo interfaces
subcategories:

  - title: Development environment
    items:
      - title: Creating the Gazebo Development environment
        url: https://discourse.openrobotics.org/t/setting-up-development-environment-for-making-changes-on-gz-sim-gz-math-gz-sensors/48441
        desc: How to setup the platform for Gazebo development and how to install the required dependencies
        star: true

  - title: Developing Plugins
    items:
      - title: Create System Plugins
        url: https://gazebosim.org/api/sim/9/createsystemplugins.html
        desc: Official Gazebo Sim documentation for System Plugin creation
        star: true
      - title: GUI Plugin Example
        url: https://github.com/gazebosim/gz-sim/blob/gz-sim9/examples/plugin/gui_system_plugin/README.md
        desc: Official Gazebo Sim GUI example
        star: true

  - title: Python bindings
    items:
      - title: Available Python Bindings for Gazebo Libraries
        url: https://discourse.openrobotics.org/t/python-bindings-for-gazebo-ignition/47935
        desc: Hints for finding the Python bindings available in the Gazebo libraries
        star: true

      - title: gz-math Python tutorial
        url: https://gazebosim.org/api/math/8/pythongetstarted.html
        desc: Official tutorial for getting started with Python bindings for gz-math
        star: true

  - title: Transport and messages
    items:
      - title: Custom protobuf messages with gz-msgs
        url: https://gazebosim.org/api/math/8/pythongetstarted.html
        desc: Define custom protobuf messages that reuse gz-msgs or are hosted in an external repository
        star: false
      - title: Zenoh support for gz-transport
        url: https://vimeo.com/1123639071?fl=pl&fe=cm#t=43m22s
        desc: Gazebo Jetty adds Zenoh as transport alternative to ZeroMQ. Set GZ_TRANSPORT_IMPLEMENTATION=zenoh for better discovery and ROS 2 interoperability
        star: false

  - title: Working with Camera Images
    items:
     - title: Processing camera images
       url: https://discourse.openrobotics.org/t/seeking-a-way-for-processing-gazebo-garden-camera-sensor-data-without-ros/48204
       desc: Thread with options about how to retrieve and process camera images
       star: false
---
