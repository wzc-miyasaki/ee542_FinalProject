# ee542_FinalProject





### Gateway Setup

Configuring Conduit gateway device is straightfoward here. The tricky part is to manually assign a static IP address for the gateway since you have to make sure both IoT device and gateway are under the same network. 

1. Connect the multi-Tech conduit gateway device to a router through an ethernet cable. Install the antenna on gateway device to enable the wireless communication between it and the xDot devices.
2. Establish a serial connection between the gateway and a PC via a micro-usb cable. You need to set up a correct IP address first so that you can login to the gateway later through its static IP address. 
3. On the terminal, using the command `ifconfig eth0 IP_ADDRESS` to modify the IP address of a specific interface. Make sure the IP address you have assigned is under same subnet to which the IoT device is connected.
4. With that IP address, you can now login to the backend of the conduit on a web browser. You can then assign a permanent static IP address after you login to the gateway. 
5. After the IP configuration, you need to start the Node-Red running over the gateway. More details will be illustrated in Node-red part.



### xDot Setup

In this part, the xDot will be configured to build a connection with Multi-Tech Conduit, a gateway device, for data transmission.  

- The first thing is to upload "AT command firmware" file to xDot. 

    > The AT commands are used for configuring and controlling the device, especially for communication over the LoRaWAN (Long Range Wide Area Network) protocol. 

- Then we need to program the xDot in order to send the data it collects back to conduit. 

Both firmware and programmed BIN file has been provided. All you need to do is to drag them to the driver folder of xDot.  



##### Dot-AT-Firmware

- The AT firmware bin file can be found under the folder `ee542_FinalProject/xDot_Bin_Files`.  
- Drag it to xDot driver folder. Make sure the transmission did not fail. 
- Open a serial connection to the USB UART (**not the debug port**) with a baud of 115200. The proper port name can also be found in Device Manager if you are using Windows OS. 
- Hit the reset button on the xDot. Now you are ready to configure xDot with AT command. 
- Typing `AT` command, and the xDot must return an OK which determines successful connection and a working AT firmware.
- Now configure xDot by following screenshot. This will allow xDot to comminicate with Conduit gateway. 
    <img src="Images/AT_command.png" style="width:250px; height:400px;">



##### Dot-Examples.bin

The BIN file can be found under same folder `ee542_FinalProject/xDot_Bin_Files`.  The purpose of this BIN is to allow xDot to parse the real-time data it collects from a wind sensor, and transmit the measurements back to the gateway. 

The following image shows the coding part of the data transmission. 

<img src="Images/xDot_sendData_code.png" style="width:600px; height:400px;">



##### Android Phone Node-Red Implementation
![image](https://github.com/wzc-miyasaki/ee542_FinalProject/assets/45318227/6dffe9f2-ecb8-446e-bf43-f44c6bd62365)

##### IoT Schematic
![0a5eb278bb886a06d8a31bf7c92a017](https://github.com/wzc-miyasaki/ee542_FinalProject/assets/45318227/b3133d6d-6d73-4d2b-8310-5831d1f3d4a5)
