# settings-configs - Hyper (Terminal)
Hyper Settings https://github.com/zeit/hyper

.hyper.js - my hyper settings

plugins used:
    "hyper-background",
    "hyper-material-theme",
    "hyperborder",
    "hyperpower",
    "hyperterm-cursor",
    "git-falcon9",
    "hyper-transparent-dynamic",

for wow mode, type wow.

---------------
multicolored text for commands/username using 'lolcat'

sudo gem install lolcat
Then make a .bash_profile file at your user root and insert the following:

PS1_colorless=${PS1:-'\h:\W \u\$ '}
ESC=$(echo -e '\033')
SOH=$(echo -e '\001')
STX=$(echo -e '\002')
PS1_color_wrap='s/'$ESC'\\[[[:digit:];]*m/'$SOH'&'$STX'/g'
PS1="\$(lolcat -f <<< \"$PS1_colorless\" | sed '$PS1_color_wrap')"
-----------------