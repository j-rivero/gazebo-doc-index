---
# Contribution guidelines:
# https://github.com/j-rivero/gazebo-doc-index/blob/master/CONTRIBUTING.md

title: Tooling, graphic interface and command line tools
desc: Tools to work with the different Gazebo libraries and graphical features
subcategories:
  - title: Gazebo Sim GUI
    items:
      - title: Understanding the GUI
        url: https://gazebosim.org/docs/all/gui
        desc: Official tutorial explaning the basics of the Gazebo Sim GUI.
        star: true
      - title: Move Camera to model
        url: https://gazebosim.org/api/sim/7/move_camera_to_model.html
        desc: Official tutorial to move the simulation camera to a specific model.
        star: false
      - title: Tape measure
        url: https://github.com/gazebosim/gz-sim/issues/114#issuecomment-873899966
        desc: Measure distances in the 3D scene by clicking on them.
        star: false

  - title: Interacting with the simulation
    items:
     - title: Apply Force and Torque plugin
       url: https://discourse.openrobotics.org/t/gsoc-2023-dynamic-wrench-application-through-the-gui/46869#apply-force-and-torque-plugin
       desc: Apply an instantaneous force and/or torque to any link in the simulation controling its amplitude and direction
       star: true
     - title: Mouse drag plugin
       url: https://discourse.openrobotics.org/t/gsoc-2023-dynamic-wrench-application-through-the-gui/46869#mouse-drag-plugin
       desc: Drag objects around in the scene with the mouse cursor by applying forces and/or torques to links
       star: false

  - title: Visualizing data
    items:
      - title: Plotting tool for Gazebo
        url: https://discourse.openrobotics.org/t/gsoc-2020-plotting-tool-for-ignition/48325
        desc: GSoC 2020 about the adding plotting capabilities to Gazebo Sim.
        star: true
      - title: Point cloud native visualization
        url: https://github.com/gazebosim/gz-gui/pull/346
        desc: Point Cloud visualization plugin in Gazebo Sim
        star: false

---
