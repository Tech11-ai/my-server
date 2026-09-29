check_server() {
if ping -c 2 "$1"
then 
echo "$1 is UP"
else 
echo "$1 is DOWN"
fi
}

check_server "$1"
