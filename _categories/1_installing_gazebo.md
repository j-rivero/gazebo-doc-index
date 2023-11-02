---
# Contribution guidelines:
# https://github.com/j-rivero/gazebo-doc-index/blob/master/CONTRIBUTING.md

title: Installing and Setup Gazebo
desc: Gazebo vs Gazebo Classic vs Ignition, Installation, Virtualization, Large environments, Headless and CI.
subcategories:

  - title: Gazebo, Gazebo-Classic and Ignition
    items:
      - title: Alter Ego of Gazebo
        url:  https://docs.google.com/presentation/d/1Arw261f8Fye0QCghsXfHXR2VRFaJTM2vicQs2_tuSnI/edit#slide=id.p
        desc: ICRA 2023 presentation about Gazebo, versions and features
        star: true
      - title: Why the Ignition name was replaced by Gazebo
        url: https://community.gazebosim.org/t/a-new-era-for-gazebo/1356
        desc: Official forum post explaining why and how Ignition became Gazebo
        star: false
      - title: Feature comparison Gazebo Classic vs Gazebo
        url: https://gazebosim.org/docs/all/comparison
        desc: Feature comparison between Gazebo Classic and latest Gazebo
        star: false
      - title: Migrating from Gazebo Classic
        url: https://gazebosim.org/api/sim/7/tutorials.html
        desc: Gazebo Sim tutorials for migrating code from Gazebo classic

  - title: Installing on Linux, MacOSX and Windows
    items:
      - title: Choosing a Gazebo release (collection of Gazebo libs)
        url: https://gazebosim.org/docs
        desc: Main page with information on supported versions and platforms
        star: true
      - title: Supported OSX versions
        url: https://gazebosim.org/docs
        desc: Which OSX versions are supported by Gazebo
        star: true
      - title: Brew installation
        url: https://gazebosim.org/docs/latest/install_osx
        desc: Guide to go through all the steps to install Gazebo using the Brew package manager
        star: true
      - title: Brew Gazebo repository
        url: https://github.com/osrf/homebrew-simulation
        desc: Github repo containing the brew metadata about all Gazebo related packages.
        star: false
      - title: Gazebo Sim runtime problems on Windows
        url: https://github.com/gazebosim/gz-sim/issues/168
        desc: Latest updates on the problems to run Gazebo Sim on Windows
        star: true
      - title: Installation of latest Gazebo libraries on Windows
        url: https://gazebosim.org/docs/all/install_windows
        desc: Instruction to install the different Gazebo libraries on Windows using binaries
        star: false
      - title: Multiplatform conda-forge Gazebo installation
        url: https://www.youtube.com/watch?v=CY-_Yvu0ya0&ab_channel=GazeboSim
        desc: Conda introduction and how to install Gazebo using it
        star: true
      - title: WSLg with GPU support for Gazebo Garden and Harmonic
        url: https://community.gazebosim.org/t/wslg-with-gpu-support-available-on-latest-version-of-gazebo-garden-and-harmonic/2360/1
        desc: Windows Subsystem for Linux GUI installation with GPU support
        star: true

  - title: Gazebo on virtualized environments
    items:
      - title: Docker on Nvidia for Gazebo releases using ign-rocker
        url: https://github.com/adlarkin/ign-rocker
        desc: A set of rocker extensions that enable the usage of Gazebo libraries inside Docker
        star: true

      - title: Gzdev plugin for simple docker access in different Gazebo releases
        url: https://github.com/gazebo-tooling/gzdev#ign-docker-env
        desc: Plugin for gzdev that simplies accessing to a virtualized Gazebo collection environment
        star: false

  - title: Gazebo + ROS installation on Ubuntu Linux
    items:
      - title: Installing Gazebo with ROS
        url: https://gazebosim.org/docs/all/ros_installation
        desc: Main page documenting all the options of installing Gazebo and ROS together
        star: true

  - title: Large environments resources
    items:     
     - title: Gazebo Simulator Levels
       url: https://gazebosim.org/api/sim/7/levels.html
       desc: Feature thatallows loading and unloading objects in simulation according to their proximity to the robot
       star: true
     - title: Distributed Gazebo simulations
       url: https://gazebosim.org/api/sim/7/distributedsimulation.html
       desc: Distribute the simulation among 1 or more processes and machines. Might be harder to setup to gain performance.
       star: false
     - title: Gazebo Trivial Physics Engine (TPE)
       url: https://community.gazebosim.org/t/announcing-new-physics-engine-tpe-trivial-physics-engine/629
       desc: Physics for fast simulation of higher-order fleet dynamics without real physics.
       star: false
     - title: Creating model populations programatically
       url: https://community.gazebosim.org/t/creating-a-model-population-in-gazebo-garden/2060/2
       desc: ERB Templates in SDFormat to create model populations
       star: false
     - title: Building Map Generator
       url: https://osrf.github.io/ros2multirobotbook/simulation.html#building-map-generator
       desc: Open-RMF GUI tool to generate large building maps ready to use in Gazebo
       star: false

  - title: Headless simulations and CI
    items:
     - title: Headless EGL rendering (native)
       url: https://gazebosim.org/api/gazebo/6.7/headless_rendering.html
       desc: Rendering without an X server using Ogre-next EGL capabilities
       star: true
     - title: Headless EGL rendering (XVFB + VirtualGL)
       url: https://community.gazebosim.org/t/egl-support-is-available-in-ignition-fortress/1183/2
       desc: Workaround to get headless EGL rendering XVFB with an EGL render from VirtualGL
       star: false
     - title: Digital Elevation Maps
       url: https://github.com/gazebosim/docs/issues/334
       desc: Hints to use the Digital Elevation Maps (DEM) support in Gazebo Sim
       star: false
     - title: Gazebo Test Fixture helper
       url: https://gazebosim.org/api/gazebo/7/test_fixture.html
       desc: Handy code for using Gazebo in a test suite.
       star: true
     - title: Reset Simulations in Gazebo
       url: https://gazebosim.org/api/sim/7/reset_simulation.html
       desc: Tutorial for reseting the simulation to time zero.
       star: false

---
