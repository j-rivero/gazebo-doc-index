---
# Contribution guidelines:
# https://github.com/j-rivero/gazebo-doc-index/blob/master/CONTRIBUTING.md

title: Sensors in Gazebo
desc: Simulated sensors available for Gazebo, lasers, cameras, etc.
subcategories:

  - title: Finding Gazebo Sensors
    items:
      - title: List of Gazebo Supported Sensors
        url: https://github.com/gazebosim/gz-sensors?tab=readme-ov-file#supported-sensors
        desc: Official list of Sensors available in gz-sensors
        star: true
      - title: Raw list of Gazebo sensor resources and examples
        url: https://github.com/gazebosim/gazebo_test_cases/issues?q=sensor+label%3Abinary+label%3A%22Ubuntu+Jammy%22
        desc: Sensor search in the tutorial party resources listed for Gazebo community to be reviewed
        star: false

  - title: Camera sensors
    items:
    - title: Depth camera
      url: https://github.com/gazebosim/gz-rendering/blob/gz-rendering7/tutorials/23_depth_camera_tutorial.md
      desc: Example code and depth camera tutorial in the gz-rendering repository
      star: true
    - title: Thermal camera
      url: https://gazebosim.org/api/sensors/7/thermalcameraigngazebo.html
      desc: Supports objects with uniform or variable surface temperatures
      star: false
    - title: Processing camera images
      url: https://community.gazebosim.org/t/seeking-a-way-for-processing-gazebo-garden-camera-sensor-data-without-ros/2604/
      desc: Thread with options about how to retrieve and process camera images
      star: false

  - title: Laser sensors
    items:
    - title: Lidar sensor
      url: https://gazebosim.org/docs/garden/sensors#lidar-sensor
      desc: Tutorial for the Lidar sensor plugin
      star: true
    - title: Laser retroreflection
      url: https://github.com/gazebosim/gz-sim/blob/gz-sim7/examples/worlds/gpu_lidar_retro_values_sensor.sdf
      desc: Example SDF supporting objects detected by Lidar that have custom retroreflection
      star: false

  - title: Other sensors
    items:
      - title: Joint force-torque sensor
        url: https://gazebosim.org/api/gazebo/6.0/classignition_1_1gazebo_1_1systems_1_1ForceTorque.html#details
        desc: Reports forces and torques on a joint.
        star: true
      - title: Contact sensor
        url: https://gazebosim.org/docs/garden/sensors#contact-sensor
        desc: Tutorial for the Gazebo contact sensor plugin
        star: true
      - title: Battery sensor
        url: https://gazebosim.org/api/sim/7/battery.html
        desc: Tutorial for a battery system keeps track of the battery charge on a robot model.
        star: true

  - title: Gazebo sensors and ROS
    items:
      - title: Examples and tutorials for Gazebo sensors on ROS 2
        url: https://github.com/gazebosim/ros_gz/blob/ros2/ros_gz_sim_demos/README.md
        desc: Examples and images about the use Gazebo sensors in ROS 2 with the ros_gz bridge
        star: true

  - title: Developing sensors
    items:
      - title: Creating custom sensors
        url: https://gazebosim.org/api/sensors/7/custom_sensors.html
        desc: How to create custom sensors to be used by Gazebo Sim
        star: true
---
