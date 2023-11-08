---
# Contribution guidelines:
# https://github.com/j-rivero/gazebo-doc-index/blob/master/CONTRIBUTING.md

title: Thematic robotics areas
desc: Automobile, Drones, IA, Manipulation, Maritime, Space, etc.
subcategories:

  - title: Drones
    items:
      - title: ROS 2 and Gazebo integration to control multiple vehicles
        url: https://community.gazebosim.org/t/community-meeting-multi-vehicle-simulation-with-ros-2-and-gazebo/2073
        desc: Interaction with PX4 Autopilot and Betaflight for Gazebo/ROS 2 simulations
        star: true

      - title: "Aerostack2 Gazebo Assets: drone models, sensors and worlds"
        url: https://github.com/aerostack2/aerostack2/tree/main/as2_simulation_assets/as2_ign_gazebo_assets#world-models
        desc: Drone models (quadrotor, hexrotor and crzyflie), Drone sensors and Worlds from the Areostack2
        star: false

      - title: Betaflight support in Gazebo
        url: https://betaflight.com/docs/development/SITL#sitl-in-gazebo
        desc: SITL (software in the loop) Gazebo simulation allows you to run Betaflight without any hardware
        star: false

      - title: UAV models ready to use in app.gazebosim.org
        url: https://app.gazebosim.org/search;q=UAV
        desc: Several UAVs available in app.gazebosim.org ready to use
        star: false

  - title: Manipulation
    items:
      - title: Gazebo features helpful for manipulation
        url: https://docs.google.com/presentation/d/1UZiUxXx4DFY1GWSX4QJ4i8enxv67agXNuEbr4t4tBJM/edit#slide=id.g2110547bca0_1_27
        desc: Features in Gazebo that are relevant for manipulation (pages 44-47 form the ICRA 23 slides)
        star: true

      - title: ROS Moveit2 and Gazebo example repository
        url: https://github.com/AndrejOrsula/ign_moveit2_examples
        desc: C++ and Python examples of using MoveIt 2 for planning motions that are executed inside Gazebo simulation environment
        star: true

  - title: Maritime robotics
    items:
      - title: Marine Simulation - From Reality to Gazebo and Back Again
        url: https://vimeo.com/showcase/9954564/video/767140641
        desc: ROSCon 2022 presentation of Marine features in Gazebo
        star: true

      - title: Simulate surface waves
        url: https://community.gazebosim.org/t/simulate-surface-waves-and-marine-vehicle-dynamics/1268
        desc: Information about changes in the Gazebo simulator done to support better waves simulation
        star: false

  - title: IA, Datasets and Machine Learning.
    items:
     - title: Generating Computer Vision datasets
       url: https://www.linkedin.com/posts/ahcorde_ignition-sensors-activity-7076878705511325697-705o/
       desc: Gazebo Sensor tutorial for generating CV datasets
       star: true

     - title: Deep reinforcement learning manipulation ROS 2 + MoveIt2 + Gazebo + OpenAI Gym
       url: https://github.com/AndrejOrsula/drl_grasping
       desc: Example of integration of a Gazebo simulation with ROS 2 and OpenAI using grasping
       star: true


# To be put under a development section
# Custom protobuf messages
# https://github.com/jrutgeer/gazebo_assorted_tests/tree/main/custom_protobuf_msgs

---
