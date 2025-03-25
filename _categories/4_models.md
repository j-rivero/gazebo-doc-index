---
# Contribution guidelines:
# https://github.com/j-rivero/gazebo-doc-index/blob/master/CONTRIBUTING.md

title: Worlds and 3D Models
desc: Gazebo Worlds and 3D Models ready to use and documentation to create new ones
subcategories:
  - title: "Fuel: the big collection of simulation assets"
    items:
      - title: Fuel official web site
        url: https://app.gazebosim.org/fuel
        desc: Fuel web application with thousands of models ready to use (drag and drop into Gazebo)
        star: true
      - title: What is Gazebo Fuel?
        url: https://www.youtube.com/watch?v=9gKuzAiWK0I
        desc: Video presentation of the Fuel project by his authors
        star: false
      - title: Upload models to Fuel
        url: https://gazebosim.org/api/gazebo/7.0/meshtofuel.html
        desc: Official tutorial to upload new models to Fuel

  - title: World and examples ready to use
    items:
      - title: OpenRMF demos
        url: https://github.com/open-rmf/rmf_demos/tree/main
        desc: Open Robotics Middleware Framework large scenarios demos for Gazebo and ROS
        star: true
      - title: Autodesk Fusion 360 Robot Library
        url: https://github.com/bionicdl-sustech/ACDC4Robot/blob/main/RobotLibrary.md
        desc: Fusion robot models that can be used out-of-box
        star: false
      - title: Stretch robot from Hello World on Harmonic and ROS 2 Humble
        url: https://github.com/CardiffUniversityComputationalRobotics/stretch_ros2/tree/humble/stretch_gz_sim
        desc: Cardiff University repository with a ready simulating for the Stretch Robot
        star: false
      - title: OpenMANIPULATOR-X (Robotis) on Harmonic and ROS 2 Jazzy
        url: https://discourse.ros.org/t/openmanipulator-x-now-supporting-ros-2-jazzy-gazebo-harmonic/42783
        desc: OpenMANIPULATOR-X repositories with Gazebo, MoveIt2 and task planner
        star: false

  - title: Developing new Worlds and Robots for Gazebo
    items:
      - title: Building a Robot tutorial
        url: https://gazebosim.org/docs/harmonic/building_robot
        desc: Official tutorial for creating a sample robot from scratch
        star: true
      - title: Creating SDF Worlds
        url: https://gazebosim.org/docs/harmonic/sdf_worlds
        desc: Official tutorial describing the creation of an SDF world
        star: true

  - title: Developing new 3D models for Gazebo
    items:
      - title: Building and optimizing Gazebo simulation environments
        url: https://community.gazebosim.org/t/community-meeting-building-and-optimizing-gazebo-simulation-environments/2831
        desc: Video presentation from core developer explaining how to achive efficency in complex simulations
        star: true
      - title: Creating complex models and worlds in Gazebo
        url: https://robotics.stackexchange.com/questions/24926/how-do-people-create-complex-models-worlds-in-the-gazebo/
        desc: Shared experiences on how users develop the 3D models for Gazebo
        star: true
      - title: How to Achieve Realistic Visuals in Gazebo
        url: https://vimeo.com/378682646
        desc: ROSCon presentation on creating realistic visuals for Gazebo
        star: false
      - title: What is Gazebo rendering
        url: https://youtu.be/JugZs9rzpKM?t=1218
        desc: Introduction to Gazebo rendering
        star: false
      - title: Building Map Generator
        url: https://osrf.github.io/ros2multirobotbook/simulation.html#building-map-generator
        desc: Open-RMF GUI tool to generate large building maps ready to use in Gazebo
        star: false

  - title: Formats and modelling tools
    items:
      - title: Export Fusion 360 CAD designs to SDF
        url: https://discourse.ros.org/t/fusionsdf-export-fusion-360-cad-designs-to-sdf/39430/1
        desc: Export SDF directly from Fusion360 supporting many automatic features.
        star: true
      - title: Automated Conversion of Description Conventions Fusion360 Add-In.
        url: https://github.com/bionicdl-sustech/ACDC4Robot
        desc: Fusion360 extension exporting models to URDF, SDFormat, and MJCF
        star: true
      - title: Transforming FBX to DAE (Collada)
        url: https://gazebosim.org/api/rendering/8/transform_fbx_to_dae.html
        desc: Use Blender to transform FBX files to DAE to be used in Gazebo
        star: true
      - title: ColliderGen - Blender addon to create efficient collision geometries
        url: https://github.com/cole-bsmr/collidergen
        desc: A robotics focused addon for Blender that creates collision geometry and SDF files.
        star: true
      - title: creo2urdf - generate URDF model from CREO Parametric mechanisms
        url: https://github.com/icub-tech-iit/creo2urdf
        desc: Convert CREO Cad files into URDF
        star: false
      - title: Heightmap Spawner - 3D Heightmap models to Gazebo
        url: https://github.com/damanikjosh/heightmap_spawner
        desc: A ROS 2 package that converts occupancy grids from nav2_map_server into 3D heightmap for Gazebo
        star: false

---
