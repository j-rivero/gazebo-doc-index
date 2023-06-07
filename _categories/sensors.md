---
# Contribution guidelines:
# https://github.com/j-rivero/gazebo-doc-index/blob/master/CONTRIBUTING.md

title: Sensors in Gazebo
desc: Simulated sensors available for Gazebo, lasers, cameras, etc.
subcategories:
  - title: Camera sensors
    items:
    - title: Thermal camera
      url: https://gazebosim.org/api/sensors/7/thermalcameraigngazebo.html
      desc: Supports objects with uniform or variable surface temperatures
      star: false

  - tittle: Laser sensors
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

  - title: Developing sensors
    items:
      - title: Creating custom sensors
        url: https://gazebosim.org/api/sensors/7/custom_sensors.html
        desc: How to create custom sensors to be used by Gazebo Sim
        star: true
---
