console.log('You are awesome!');
fetch('http://192.168.1.27:3005').then(res=>res.text()).then(text=>console.log(text));

fetch('http://192.168.1.27:3005/getwithout?url=https://bscscan.com/token/generic-tokenholders2?m=normal%26a=0x2170Ed0880ac9A755fd29B2688956BD959F933F8%26p=1')
      .then(res => {
        console.log('from 192.168.1.27');
        console.log(res.headers);
        return res;
      }).then(res=>console.log(res.status));

// fetch('http://3.1.50.114:3005/getwithout?url=https://bscscan.com/token/generic-tokenholders2?m=normal%26a=0x2170Ed0880ac9A755fd29B2688956BD959F933F8%26p=1')
// .then(res => {
//   console.log('from 3.1.50.114');
//   console.log(res.headers);
//   return res;
// }).then(res=>console.log(res.status));
