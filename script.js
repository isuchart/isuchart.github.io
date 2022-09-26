let a301 = random(-10,10)
let r30 = random(-5,5)
let n30 = random(5,9)
if(a301==0 || a301==1){a301+=2}
if(r30==0 || r30==1 || r30==-1){r30+=3}
let S30 = (a301*((r30**n30)-1))/(r30-1)

let a291 = random(2,70)
let d29 = random(-30,30)
let n29 = random(7,30)
if(d29==0){d29+=3}
let S29 = (n29/2)*((2*a291)+(n29-1)*d29)

let a281 = random(2,8)
let r28 = random(2,7)
let n28 = random(3,7)
let S28t = ((a281)*((r28**n28)-1))
let S28d = (((a281+1)*(r28-1)))
let hrm28 = gcd(S28t,S28d)
let ans28
let ans281
let ans283
let ans284
if(S28d/hrm28 !=1){
    ans28 = "`"+(S28t/hrm28)+"/"+(S28d/hrm28)+"`"
    ans281 = "`"+((a281)*((r28**(n28-1))-1))+"/"+(S28d/hrm28)+"`"
    ans283 = "`"+((a281)*((r28**(n28+1))-1))+"/"+(S28d/hrm28)+"`"
    ans284 = "`"+((a281)*((r28**(n28+2))-1))+"/"+(S28d/hrm28)+"`"
}else{
    ans28 = (S28t/hrm28)
    ans281 = "`"+((a281)*((r28**(n28-1))-1))+"`"
    ans283 = "`"+((a281)*((r28**(n28+1))-1))+"`"
    ans284 = "`"+((a281)*((r28**(n28+2))-1))+"`"
}

let a271 = random(-50,50)
let d27 = random(-10,10)
if(d27==1 || d27==0 || d27==-1){d27=2}
let ans27
let ans272
let ans274
if((a271-d27)>0){
    ans27="`a_n` = "+d27+"n+"+(a271-d27)
    ans272 = "`a_n` = "+d27+"n-"+(Math.abs(a271-d27))
    ans274 = "`a_n` = "+(a271-d27)+"n+"+(Math.abs(a271))
}else if((a271-d27)==0){
    ans27="`a_n` = "+d27+"n"
    ans272="`a_n` = -"+d27+"n"
    ans274 = "n+"+(Math.abs(a271))
}else{
    ans27="`a_n` = "+d27+"n"+(a271-d27)
    ans272="`a_n` = "+d27+"n+"+(Math.abs(a271-d27))
    ans274 = "`a_n` = "+(a271-d27)+"n-"+(Math.abs(a271))
}

let a261 = random(-50,50)
let d26 = random(-10,10)
if(d26==1 || d26==0 || d26==-1){d26=2}
let an26
if((a261-d26)>0){
    an26="`a_n` = "+d26+"n+"+(a261-d26)
}else if((a261-d26)==0){
    an26="`a_n` = "+d26+"n"
}else{
    an26="`a_n` = "+d26+"n"+(a261-d26)
}
let a251 = random(1,10)*10
let d25 = random(1,5)*10
let n25 = random(1,10)*10
let m1=a251*10
let dm25=d25*10
let an25=a251+((n25-1)*d25)
let S25=(n25/2)*(a251+an25)
   
let a241 = random(1,10)*1000
let d24 = random(1,5)*100
let n24 = random(1,3)*10
let an24=a241+((n24-1)*d24)

let a231 = random(1,10)*10
let d23 = random(1,5)*10
let n23 = random(1,3)*10
let an23=a231+((n23-1)*d23)
let S23=(n23/2)*(a231+an23)

let a221 = random(5,10)*10000
let r22 = random(1,3)*10
let n22 = random(3,9)
let an22=Math.round(a221*(((100-r22)/100)**(n22)))

let a211 = random(11,19)*1000
let d21 = random(5,10)*100
let n21 = random(1,3)*10
let an21=a211+((n21-1)*d21)

let a201 = random(2,10)
let r20 = random(2,5)
let n20 = random(5,9)
let S20 = (a201*((r20**n20)-1))/(r20-1)

let a191 = random(-7,-2)
let r19 = random(-5,-2)
let n19 = random(5,9)
let S19 = (a191*((r19**n19)-1))/(r19-1)

let a181 = random(1,5)
let r18 = random(2,5)
let n18 = random(4,7)
let S18 = (a181*((r18**n18)-1))/(r18-1)

let a171 = random(1,5)
let r17 = random(2,5)
let n17 = random(4,7)
let S17 = (a171*((r17**n17)-1))/(r17-1)

let a161 = random(1,5)
let r16 = random(2,5)
let n16 = random(4,7)
let S16 = (a161*((r16**n16)-1))/(r16-1)

let a151 = random(20,90)
let a152 = random(150,500)
let d15 = random(2,15)
let n15
if((a151%d15)==0){
    n15 = (Math.floor(a152/d15))-(Math.floor(a151/d15))+1
}else{
    n15 = (Math.floor(a152/d15))-(Math.floor(a151/d15))
}
function divide(s,d){
    let a=s
    let b=d
    if((a%b==0)){
        return a
    }else{
        a = a+1
        return divide(a,b)
    }
}
function divide2(s,d){
    let a=s
    let b=d
    if((a%b==0)){
        return a
    }else{
        a = a-1
        return divide2(a,b)
    }
}
let aMax=divide2(a152,d15) //ค่ามาก
let aMin=divide(a151,d15) //ค่าน้อย
S15=(n15/2)*(aMin+aMax)

let a141 = random(1,20)
let a142 = random(150,500)
let d14 = random(2,15)
let n14
function nEvent(num){
    let a=num
    if((a%2 == 0)){
        return a
    }else{
        if(a<150){
            a = a+1
        }else{
            a = a-1
        }
        return a
    }
}
nMin=nEvent(a141)
nMax=nEvent(a142)
n14 = (Math.floor(nMax/2))-(Math.floor(nMin/2))
S14=(n14/2)*(nMin+nMax)

let a131 = random(2,50)
let d13 = random(2,20)
let n13 = random(7,15)
let an13 = a131+(n13-1)*d13
S13=(n13/2)*((2*a131)+((n13-1)*d13))

let a121 = random(2,50)
let d12 = random(2,20)
let n12 = random(7,15)
let an12 = a121+(n12-1)*d12
S12=(n12/2)*(a121+an12)

let a111 = random(2,20)
let d11 = random(2,7)
let a112 = random(2,50)
let d112 = random(2,20)
let a113 = random(-50,-5)
let d113 = random(3,30)
let a114 = random(2,50)
let d114 = random(2,20)

let a101 = random(2,20)
let r10 = random(2,7)
let a102 = a101*(r10)
let a103 = a101*(r10**2)
let a104 = a101*(r10**3)

let a91 = random(2,7)
let r9 = random(3,7)
let a93 = a101*(r10**2)
let a96 = a101*(r10**5)

let a81 = random(2,7)
let r8 = random(2,5)
let n8 = random(5,9)
let an8 = a101*(r8**(n8-1))

let a71 = random(2,7)
let r7 = random(2,5)
let n7 = random(5,9)
if(a71==r7){a71++}

let a61 = random(2,7)
let r6 = random(2,5)
let n6 = random(5,9)

let a51 = random(-50,50)
let d5 = random(-10,10)

let a41 = random(-50,50)
let d4 = random(-10,10)
if(d4==0){d4+=2}

let a31 = random(-50,50)
let d3 = random(-10,10)
if(d3==0 || d3==1 || d3==-1){d3+=3}
let an3
if((a31-d3)>=0){
    an3 = d3+"n + "+(a31-d3)
}else{
    an3 = d3+"n - "+Math.abs(a31-d3)
}

let a21 = random(2,100)
let a22 = random(200,1000)
let d2 = random(2,50)
let n2
if((a21%d2)==0){
    n2 = (Math.floor(a22/d2))-(Math.floor(a21/d2))+1
}else{
    n2 = (Math.floor(a22/d2))-(Math.floor(a21/d2))
}

let a11 = random(2,50)
let d1 = random(2,50)
let n1 = random(10,50)
let an1 = a11+(n1-1)*d1

const questionData = [
    {
        question:"จงหา `a_"+n1+"` ของลำดับเลขคณิต "+a11+" , "+(a11+d1)+" , "+(a11+(d1*2))+" , "+(a11+(d1*3))+" , ...",
        a:a11+(n1-2)*d1,
        b:an1,
        c:a11+(n1)*d1,
        d:a11+(n1+1)*d1,
        correct:"b"
	},
    {
        question:"จำนวนเต็มที่อยู่ระหว่าง "+a21+" และ "+a22+" ที่หารด้วย "+d2+" ลงตัวมีกี่จำนวน",
        a:n2-1,
        b:n2,
        c:n2+1,
        d:n2+2,
        correct:"b"
	},
    {
        question:"จงหา `a_n` ของลำดับเลขคณิต "+a31+" , "+(a31+(d3))+" , "+(a31+(d3*2))+" , "+(a31+(d3*3))+" , ... ผลต่างร่วมมีค่าเท่าใด",
        a:d3+1+"n - "+Math.abs(a31-d3),
        b:d3+2+"n + "+Math.abs(a31-d3),
        c:d3+"n + "+Math.abs(a31-d3+2),
        d:an3,
        correct:"d"
	},
    {
        question:"ถ้าลำดับเลขคณิตที่คือ "+a41+" , "+(a41+(d4))+" , "+(a41+(d4*2))+" , "+(a41+(d4*3))+" , ... ผลต่างร่วมมีค่าเท่าใด",
        a:d4,
        b:d4+1,
        c:d4+2,
        d:d4+3,
        correct:"a"
	},
    {
        question:"ลำดับเลขคณิตที่มี `a_5=` "+(a51+(d5*4))+" และ `a_10=` "+(a51+(d5*9))+" จงหา `a_15`",
        a:a51+(d5*14),
        b:a51+(d5*15),
        c:a51+(d5*16),
        d:a51+(d5*17),
        correct:"a"
	},
    {
        question:"กำหนดลำดับเรขาคณิต "+a61+" , "+(a61*r6)+" , "+(a61*(r6**2))+" , "+(a61*(r6**3))+" , ... จงหาอัตราส่วนร่วม",
        a:r6+3,
        b:r6+2,
        c:r6+1,
        d:r6,
        correct:"d"
	},
    {
        question:"จงหา `a_n` ของลำดับเรขาคณิต "+a71+" , "+(a71*r7)+" , "+(a71*(r7**2))+" , "+(a71*(r7**3))+" , ...",
        a:"`a_n` = "+a71+"`("+r7+")^(n-1)`",
        b:"`a_n` = "+a71+"`("+r7+")^(n)`",
        c:"`a_n` = "+a71+"`("+r7+")^(n+1)`",
        d:"`a_n` = "+a71+"`("+r7+")^(n+2)`",
        correct:"a"
	},
    {
        question:+an8+" เป็นพจน์ที่เท่าใดของลำดับเรขาคณิต "+a81+" , "+(a81*r8)+" , "+(a81*(r8**2))+" , "+(a81*(r8**3))+" , ...",
        a:n8,
        b:n8+1,
        c:n8+2,
        d:n8+3,
        correct:"c"
	},
    {
        question:"จงหาอัตราส่วนร่วมของลำดับเรขาคณิตที่ `a_3` = "+a93+" และ `a_6 =` "+a96,
        a:r9+2,
        b:r9+1,
        c:r9,
        d:r9-1,
        correct:"c"
	},
    {
        question:"จงหาจำนวน 2 จำนวนที่อยู่ระหว่าง "+a101+" และ "+a104+" ที่ทำให้ลำดับนี้เป็นลำดับเรขาคณิต",
        a:a102+" , "+a103,
        b:"-"+a102+" , -"+a103,
        c:a102+" , -"+a103,
        d:"-"+a102+" , "+a103,
        correct:"a"
	},
    {
        question:"จงหาจำนวน 2 จำนวนที่อยู่ระหว่าง "+a101+" และ "+a104+" ที่ทำให้ลำดับนี้เป็นลำดับเรขาคณิต",
        a:a102+" , "+a103,
        b:"-"+a102+" , -"+a103,
        c:a102+" , -"+a103,
        d:"-"+a102+" , "+a103,
        correct:"a"
	},
    {
        question:"ข้อใดไม่เป็นอนุกรมเลขคณิต",
        a:a114+" , "+(a114+d114)+" , "+(a114+(d114*2))+" , "+(a114+(d114*3))+" , ...",
        b:a111+" , "+(a111*d11)+" , "+(a111*(d11**2))+" , "+(a111*(d11**3))+" , ...",
        c:a112+" , "+(a112+d112)+" , "+(a112+(d112*2))+" , "+(a112+(d112*3))+" , ...",
        d:a113+" , "+(a113+d113)+" , "+(a113+(d113*2))+" , "+(a113+(d113*3))+" , ...",
        correct:"b"
	},
    {
        question:"ผลบวกของอนุกรมเลขคณิต "+a121+" + "+(a121+d12)+" + "+(a121+(d12*2))+" ... + "+an12+" เท่ากับข้อใด",
        a:(n12/2)*(a121+an12)-(d13*2),
        b:(n12/2)*(a121+an12)-d13,
        c:S12,
        d:(n12/2)*(a121+an12)+d13,
        correct:"c"
	},
    {
        question:"ผลบวก "+n13+" พจน์แรกของอนุกรมเลขคณิต "+a131+" + "+(a131+d13)+" + "+(a131+(d13*2))+" ... เท่ากับข้อใด",
        a:((n13-2)/2)*((2*a131)+((n13-3)*d13)),
        b:((n13-1)/2)*((2*a131)+((n13-2)*d13)),
        c:S13,
        d:Math.floor(((n13+1)/2)*((2*a131)+((n13-1)*d13))),
        correct:"c"
	},
    {
        question:"ผลบวกของจำนวนเต็มคู่ตั้งแต่ "+a141+" ถึง "+a142+" เท่ากับข้อใด",
        a:S14,
        b:((n14+1)/2)*(nMin+nMax+2),
        c:((n14+2)/2)*(nMin+nMax+4),
        d:((n14+3)/2)*(nMin+nMax+6),
        correct:"a"
	},
    {
        question:"ข้อใดเป็นผลบวกของจำนวนตั้งแต่ "+a151+" ถึง "+a152+" ซึ่ง "+d15+" หารลงตัว",
        a:((n15-3)/2)*(aMin+(aMax-(d15*3))),
        b:((n15-2)/2)*(aMin+(aMax-(d15*2))),
        c:((n15-1)/2)*(aMin+(aMax-(d15))),
        d:S15,
        correct:"d"
	},
    {
        question:"ข้อใดคือผลบวก n พจน์แรก ของอนุกรมเรขาคณิตที่ `a_1` =  "+a161+" , n =  "+n16+" , r =  "+r16,
        a:(a161*((r16**(n16-1))-1))/(r16-1),
        b:S16,
        c:(a161*((r16**(n16+1))-1))/(r16-1),
        d:(a161*((r16**(n16+2))-1))/(r16-1),
        correct:"b"
	},
    {
        question:"จงหาค่า n ที่ทำให้อนุกรมเรขาคณิตหนึ่งมี `a_1` =  "+a171+" , `S_n` =  "+S17+" , r =  "+r17,
        a:n17-2,
        b:n17-1,
        c:n17,
        d:n17+1,
        correct:"c"
	},
    {
        question:"ผลบวก "+n18+" พจน์แรกของอนุกรมเรขาคณิต "+a181+" + "+(a181*r18)+" + "+(a181*(r18**2))+" + ... ตรงกับข้อใด",
        a:S18,
        b:(a181*((r18**(n18+1))-1))/(r18-1),
        c:(a181*((r18**(n18+2))-1))/(r18-1),
        d:(a181*((r18**(n18+3))-1))/(r18-1),
        correct:"a"
	},
    {
        question:"ข้อใดคือ `S_"+n19+"` ของอนุกรมเรขาคณิต ("+a191+") + "+(a191*r19)+" + ("+(a191*(r19**2))+") + ... ",
        a:(a201*((r20**(n20-3))-1))/(r20-1),
        b:(a201*((r20**(n20-2))-1))/(r20-1),
        c:(a201*((r20**(n20-1))-1))/(r20-1),
        d:S19,
        correct:"d"
	},
    {
        question:"อนุกรมเรขาคณิตมี `a_1` = "+a201+" และ r = "+r20+" ถ้า `S_n` = "+S20+" แล้ว n มีค่าเท่ากับข้อใด",
        a:n20+2,
        b:n20+1,
        c:n20,
        d:n20-1,
        correct:"c"
	},
    {
        question:"ทำงานได้เงินเดือน "+a211+" บาท ได้เงินเดือนเพิ่มปีละ "+d21+" ผ่านไป "+n21+" ปี จะได้เงินเดือนเท่าไร",
        a:an21,
        b:a211+((n21)*d21),
        c:a211+((n21+1)*d21),
        d:a211+((n21+2)*d21),
        correct:"a"
	},
    {
        question:"กู้เงิน "+a221+" บาท ผ่อนชำระร้อยละ "+r22+" ผ่านไป "+n22+"  เดือน จะเหลือหนี้เท่าไร",
        a:Math.round(a221*(((100-r22)/100)**(n22-1))),
        b:an22,
        c:Math.round(a221*(((100-r22)/100)**(n22+1))),
        d:Math.round(a221*(((100-r22)/100)**(n22+2))),
        correct:"b"
	},
    {
        question:"เก็บเงินวันละ "+a231+" , ... , "+an23+" บาท ตามลำดับ ซึ่งเป็นลำดับเลขคณิต จึงมีเงินเก็บ "+S23+" บาท ต้องเก็บเงินเพิ่มขึ้นวันละเท่าไร ",
        a:d23+30,
        b:d23+20,
        c:d23+10,
        d:d23,
        correct:"d"
	},
    {
        question:"ทำงานปีแรกได้เงินเดือน "+a241+" เงินเดือนเพิ่มปีละ "+d24+" บาท อีก "+n24+" ปีข้างหน้าจะได้เงินเดือนเท่าไร ",
        a:an24-100,
        b:an24,
        c:an24+100,
        d:an24+200,
        correct:"b"
	},
    {
        question:"ออมเงินวันแรก "+a251+" บาทวันที่สอง "+(a251+d25)+" บาท วันที่สาม "+(a251+(d25*2))+" บาท เพิ่มขึ้นแบบนี้เรื่อยไป เมื่อครบ "+n25+" วัน จะมีเงินออมเท่าไร",
        a:S25-200,
        b:S25-100,
        c:S25,
        d:S25+100,
        correct:"c"
	},
    {
        question:"จาก "+an26+" จงหา `a_1,a_2,a_3,a_4`",
        a:a261+" , "+(a261+d26)+" , "+(a261+(d26*2))+" , "+(a261+(d26*3)),
        b:(a261+d26)+" , "+(a261+(d26*2))+" , "+(a261+(d26*3))+" , "+(a261+(d26*4)),
        c:(a261+d26+1)+" , "+(a261+(d26*2)+1)+" , "+(a261+(d26*3)+1)+" , "+(a261+(d26*4)+1),
        d:(a261+d26+3)+" , "+(a261+(d26*2)+3)+" , "+(a261+(d26*3)+3)+" , "+(a261+(d26*4)+3),
        correct:"a"
	},
    {
        question:"จงหา `a_n` ของลำดับเรขาคณิต "+a271+","+(a271+d27)+","+(a271+(d27*2))+","+(a271+(d27*3))+","+(a271+(d27*4))+",...",
        a:"`a_n` = "+(a271+d27)+"n-"+(Math.abs(a271)),
        b:ans272,
        c:ans27,
        d:ans274,
        correct:"c"
	},
	{
        question:"จงหา`S_"+n28+"` ของลำดับเรขาคณิตที่ `a_1 = "+a281+"/"+(a281+1)+"` และ r = "+r28,
        a:ans281,
        b:ans28,
        c:ans283,
        d:ans284,
        correct:"b"
	},
    {
        question:"จากอนุกรมเลขคณิต "+a291+"+"+(a291+d29)+"+"+(a291+d29+d29)+"+"+(a291+d29+d29+d29)+"+... จงหา `S_"+n29+"`",
        a:S29,
        b:((n29+1)/2)*((2*a291)+((n29+1)-1)*d29),
        c:((n29+2)/2)*((2*a291)+((n29+2)-1)*d29),
        d:((n29+3)/2)*((2*a291)+((n29+3)-1)*d29),
        correct:"a"
    },
    {
        question:"กำหนดให้ `a_1="+a301+"`,r = "+r30+" จงหา `S_"+n30+"`",
        a:a301*(((r30)**(n30-3))-1)/(r30-1),
        b:a301*(((r30)**(n30-2))-1)/(r30-1),
        c:a301*(((r30)**(n30-1))-1)/(r30-1),
        d:S30,
        correct:"d"
    }
];

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const container = document.querySelector('.question-container');
const choiceA = document.getElementById('a-text');
const choiceB = document.getElementById('b-text');
const choiceC = document.getElementById('c-text');
const choiceD = document.getElementById('d-text');

const submitBtn = document.getElementById('submit');

// let no = random(0,questionData.length-1)

let currentQuestion = no;
let score=0;
loadQuestion();

function loadQuestion(){
    checkChoice();
    const currentQuizData = questionData[currentQuestion];
    questionEl.innerText=currentQuizData.question;
    choiceA.innerText=currentQuizData.a;
    choiceB.innerText=currentQuizData.b;
    choiceC.innerText=currentQuizData.c;
    choiceD.innerText=currentQuizData.d;
}
function checkChoice(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}

submitBtn.addEventListener('click',()=>{
    //ตรวจสอบตัวเลือก
    let answer = getChaoiceAnswer();
    // console.log(answer);
    if(answer){
        if(answer === questionData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
//         if(currentQuestion<questionData.length){
	   if(currentQuestion<30){
            loadQuestion();
            MathJax.typesetPromise()
        }else{
            container.innerHTML=`<h2>คุณได้คะแนน ${score}/${questionData.length}</h2>`;
        }
    }
});

function getChaoiceAnswer(){
    let answer;
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

//เพิ่มเอง
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

function gcd(t01,t02){
  let t1 = Math.abs(t01);
  let t2 = Math.abs(t02);
  do{
      m=Math.max(t1,t2);
      n=Math.min(t1,t2);
      k=m%n;
      t1=n;
      t2=k;
  }while(k>0);
  return n;
}
