# Update Netgear R6300V2 Charter Firmware to Stock Firmware
As of 6/26/2019 the newest firmware for the R6300V2 WiFi Router is 1.0.4.36_10.0.93. I wanted to install it on my router, but discovered I couldn't because it is a Charter branded version of the router. You'll be able to tell you have the Charter version of the R6300V2 by seeing that the firmware on it is "1.0.3.6_1.0.63_CH". __It is possible though to change the router boardid without a JTAG and it allows you to install standard R6300V2 firmware on it.__
Other threads on the internet describe flashing a dd-wrt file called "dd-wrt.K3_R6300V2CH.chk". However, the only one I see available is ~23mb and it will not flash, the router upgrade page will say "This firmware file is incorrect!..". It is said there was a smaller filesize version of that file, but I could not find it anywhere. So, do the following:
(orig credit to jamesfo0 on a myopenrouter.com thread)

My steps for OSX:
1.  Ensure a network cable is connected between the R6300V2 Charter router and your computer.
2.  Download telnetenable from http://www.myopenrouter.com/downloads/file/3032/telnetenable-0.4-2.tar.gz  and extract to a folder.
3.  Open a terminal to the folder you extracted and type 'make'. telnetenable should build.
4.  Get the MAC address for your router. One way is to look on the sticker on the bottom of the router. (Ex: F2BC4DA1B5A7)
5.  Type the following to enable telnet  (replace {MACaddress} with the one you found in step 4.
  * ./telnetenable 192.168.1.1 {MACaddress} Gearguy Geardog
  * If that doesn't work, type this: ./telnetenable - {MACaddress} admin password | nc -u 192.168.1.1 23
6.  Now, try to connect to it with telnet (if you don't have telnet installed do 'brew install telnet' first)
  * telnet 192.168.1.1
  * It should show 'Connected to 192.168.1.1... BusyBox... then a # prompt'
7.  Type this:   burnboardid U12H240T00_NETGEAR
8.  Type this:   nvram set board_id=U12H240T00_NETGEAR
9.  Now just to be safe, reboot the router.
10.  You should be able to download the newest firmware for R6300V2 and install it now.

Ref: https://openwrt.org/toh/netgear/telnet.console

https://www.netgear.com/support/product/R6300v2.aspx#download
