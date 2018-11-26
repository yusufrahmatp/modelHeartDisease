(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(68)},37:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/bars.578794e3.svg"},61:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(8),s=a.n(r),c=a(69),o=(a(37),a(9)),i=a(10),u=a(12),m=a(11),h=a(13),d=a(71),g=a(70),E=a(30),p=a(3),f=a(26),v=a.n(f),C=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleAgeChange=function(t){e.setState({age:t.target.value})},e.handleSexChange=function(t){e.setState({sex:t.target.value})},e.handleChestPainChange=function(t){e.setState({chestPain:t.target.value})},e.handleRestingBloodPressureChange=function(t){e.setState({restingBloodPressure:t.target.value})},e.handleSerumCholesterolChange=function(t){e.setState({serumCholesterol:t.target.value})},e.handleFastingBloodSugarChange=function(t){e.setState({fastingBloodSugar:t.target.value})},e.handleRestingEcgChange=function(t){e.setState({restingEcg:t.target.value})},e.handleMaxHeartRateChange=function(t){e.setState({maxHeartRate:t.target.value})},e.handleExerciseInducesAnginaChange=function(t){e.setState({exerciseInducesAngina:t.target.value})},e.handleStDepressionChange=function(t){e.setState({stDepression:t.target.value})},e.handlePeakExerciseStChange=function(t){e.setState({peakExerciseSt:t.target.value})},e.handleMajorVesselsNumChange=function(t){e.setState({majorVesselsNum:t.target.value})},e.handleThalChange=function(t){e.setState({thal:t.target.value})},e.onSubmit=function(){e.props.handleSubmit(e.state)},e.state={age:"",sex:"1",chestPain:"1",restingBloodPressure:"",serumCholesterol:"",fastingBloodSugar:"1",restingEcg:"0",maxHeartRate:"",exerciseInducesAngina:"1",stDepression:"",peakExerciseSt:"1",majorVesselsNum:"0",thal:"3"},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.state),l.a.createElement(p.i,{isOpen:this.props.isOpen,toggle:this.props.toggle},l.a.createElement(p.l,{toggle:this.props.toggle},"Title"),l.a.createElement(p.j,null,l.a.createElement(p.c,null,l.a.createElement(p.m,null,l.a.createElement(p.b,null,l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"age"},"Age"),l.a.createElement(p.e,{type:"number",name:"age",id:"age",value:this.state.age,onChange:this.handleAgeChange}))),l.a.createElement(p.b,null,l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"sex"},"Sex"),l.a.createElement(p.e,{type:"select",name:"sex",id:"sex",value:this.state.sex,onChange:this.handleSexChange},l.a.createElement("option",{value:1},"Male"),l.a.createElement("option",{value:0},"Female"))))),l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"chestPain"},"Chest-Pain Type"),l.a.createElement(p.e,{type:"select",name:"chestPain",id:"chestPain",value:this.state.chestPain,onChange:this.handleChestPainChange},l.a.createElement("option",{value:1},"Typical Angina"),l.a.createElement("option",{value:2},"Atypical Angina"),l.a.createElement("option",{value:3},"Non-Anginal Pain"),l.a.createElement("option",{value:4},"Asymptotic"))),l.a.createElement(p.m,null,l.a.createElement(p.b,null,l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"restingBloodPressure"},"Resting Blood Pressure"),l.a.createElement(p.f,null,l.a.createElement(p.e,{type:"number",name:"restingBloodPressure",id:"restingBloodPressure",value:this.state.restingBloodPressure,onChange:this.handleRestingBloodPressureChange}),l.a.createElement(p.g,{addonType:"append"},"mmHg")))),l.a.createElement(p.b,null,l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"serumCholesterol"},"Serum",l.a.createElement("br",null),"Cholesterol"),l.a.createElement(p.f,null,l.a.createElement(p.e,{type:"number",name:"serumCholesterol",id:"serumCholesterol",value:this.state.serumCholesterol,onChange:this.handleSerumCholesterolChange}),l.a.createElement(p.g,{addonType:"append"},"mg/dl")))),l.a.createElement(p.b,null,l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"fastingBloodSugar"},"Fasting Blood Sugar > 120 mg/dl"),l.a.createElement(p.e,{type:"select",name:"fastingBloodSugar",id:"fastingBloodSugar",value:this.state.fastingBloodSugar,onChange:this.handleFastingBloodSugarChange},l.a.createElement("option",{value:1},"True"),l.a.createElement("option",{value:0},"False"))))),l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"restingEcg"},"Resting ECG"),l.a.createElement(p.e,{type:"select",name:"restingEcg",id:"restingEcg",value:this.state.restingEcg,onChange:this.handleRestingEcgChange},l.a.createElement("option",{value:0},"Normal"),l.a.createElement("option",{value:1},"Having ST-T Wave Abnormality"),l.a.createElement("option",{value:2},"Left Ventricular Hyperthrophy"))),l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"maxHeartRate"},"Max Heart Rate Achived"),l.a.createElement(p.e,{type:"number",name:"maxHeartRate",id:"maxHeartRate",value:this.state.maxHeartRate,onChange:this.handleMaxHeartRateChange})),l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"exerciseInducesAngina"},"Exercise Induced Angina"),l.a.createElement(p.e,{type:"select",name:"exerciseInducesAngina",id:"exerciseInducesAngina",value:this.state.exerciseInducesAngina,onChange:this.handleExerciseInducesAnginaChange},l.a.createElement("option",{value:1},"Yes"),l.a.createElement("option",{value:0},"No"))),l.a.createElement(p.m,null,l.a.createElement(p.b,null,l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"stDepression"},"ST Depression"),l.a.createElement(p.e,{type:"number",name:"stDepression",id:"stDepression",value:this.state.stDepression,onChange:this.handleStDepressionChange}))),l.a.createElement(p.b,null,l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"peakExerciseSt"},"Peak Exercise ST"),l.a.createElement(p.e,{type:"select",name:"peakExerciseSt",id:"peakExerciseSt",value:this.state.peakExerciseSt,onChange:this.handlePeakExerciseStChange},l.a.createElement("option",{value:1},"Upsloping"),l.a.createElement("option",{value:2},"Flat"),l.a.createElement("option",{value:3},"Downsloping"))))),l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"majorVesselsNum"},"Number of Major Vessels"),l.a.createElement(p.e,{type:"select",name:"majorVesselsNum",id:"majorVesselsNum",value:this.state.majorVesselsNum,onChange:this.handleMajorVesselsNumChange},l.a.createElement("option",{value:0},"0"),l.a.createElement("option",{value:1},"1"),l.a.createElement("option",{value:2},"2"),l.a.createElement("option",{value:3},"3"))),l.a.createElement(p.d,null,l.a.createElement(p.h,{for:"thal"},"Thal"),l.a.createElement(p.e,{type:"select",name:"thal",id:"thal",value:this.state.thal,onChange:this.handleThalChange},l.a.createElement("option",{value:3},"Normal"),l.a.createElement("option",{value:6},"Fixed Defect"),l.a.createElement("option",{value:7},"Reversable Defect"))))),l.a.createElement(p.k,null,l.a.createElement(p.a,{color:"primary",onClick:this.onSubmit},"Submit")))}}]),t}(n.Component),S=(a(60),a(61),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).renderHead=function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Sex"),l.a.createElement("th",null,"Chest-Pain Type"),l.a.createElement("th",null,"Resting Blood Pressure"),l.a.createElement("th",null,"Serum Cholesterol"),l.a.createElement("th",null,"Fasting Blood Sugar > 120 mg/dl"),l.a.createElement("th",null,"Resting ECG"),l.a.createElement("th",null,"Max Heart Rate Achieved"),l.a.createElement("th",null,"Exercise Induced Angina"),l.a.createElement("th",null,"ST Depression"),l.a.createElement("th",null,"Peak Exercise ST"),l.a.createElement("th",null,"Number of Major Vessels"),l.a.createElement("th",null,"Thal"),l.a.createElement("th",null,"Diagnosis")))},e.handleAddNewClick=function(){e.setState({isModalOpen:!0})},e.handleCloseModal=function(){e.setState({isModalOpen:!1})},e.handleSubmit=function(t){e.setState({data:Object(E.a)(e.state.data).concat([t])},e.handleCloseModal)},e.renderRows=function(){if(0===e.state.data.length)return l.a.createElement("tr",null,l.a.createElement("td",{colSpan:15,className:"text-center"},"No Data"));for(var t=[],a=0;a<e.state.data.length;a++)t.push(e.renderRow(a+1,e.state.data[a]));return t},e.renderRow=function(t,a){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t),l.a.createElement("td",null,a.age),l.a.createElement("td",null,"1"===a.sex?"Male":"Female"),l.a.createElement("td",null,e.renderChestPain(a.chestPain)),l.a.createElement("td",null,a.restingBloodPressure),l.a.createElement("td",null,a.serumCholesterol),l.a.createElement("td",null,"1"===a.fastingBloodSugar?"True":"False"),l.a.createElement("td",null,e.renderRestingEcg(a.restingEcg)),l.a.createElement("td",null,a.maxHeartRate),l.a.createElement("td",null,"1"===a.exerciseInducesAngina?"Yes":"No"),l.a.createElement("td",null,a.stDepression),l.a.createElement("td",null,e.renderPeakExerciseSt(a.peakExerciseSt)),l.a.createElement("td",null,a.majorVesselsNum),l.a.createElement("td",null,e.renderThal(a.thal)),l.a.createElement("td",{className:"text-center"},e.renderDiagnosa(a)))},e.renderChestPain=function(e){switch(e){case"1":return"Typical Angina";case"2":return"Atypical Angina";case"3":return"Non-Anginal pain";case"4":return"Asymptotic";default:return"error"}},e.renderRestingEcg=function(e){switch(e){case"0":return"Normal";case"1":return"Having ST-T Wave Abnormality";case"2":return"Left Ventricular Hyperthrophy";default:return"error"}},e.renderPeakExerciseSt=function(e){switch(e){case"1":return"Upsloping";case"2":return"Flat";case"3":return"Downsloping";default:return"error"}},e.renderThal=function(e){switch(e){case"3":return"Normal";case"6":return"Fixed Defect";case"7":return"Reversable Defect";default:return"error"}},e.renderDiagnosa=function(e){var t={method:"POST",data:e,url:"localhost:5000/heartdisease"};v()(t).then(function(e){console.log(e,"response")})},e.state={isModalOpen:!1,data:[]},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"table-wrapper"},l.a.createElement("h1",{className:"text-center"},"Heart Disease"),l.a.createElement("div",null,l.a.createElement("div",{className:"add-button"},l.a.createElement(p.a,{color:"success",onClick:this.handleAddNewClick},"+ Add New")),l.a.createElement(p.n,{hover:!0},this.renderHead(),l.a.createElement("tbody",null,this.renderRows())),l.a.createElement(C,{isOpen:this.state.isModalOpen,toggle:this.handleCloseModal,handleSubmit:this.handleSubmit}))))}}]),t}(n.Component)),x=(a(63),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(g.a,{path:"/",component:S}))}}]),t}(n.Component));a(66);s.a.render(l.a.createElement(c.a,null,l.a.createElement(x,null)),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.a0f4afdc.chunk.js.map