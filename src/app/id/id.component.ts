import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IDComponent implements OnInit {

  CityList = [
    {City: '台北市', Code: 'A', Number: 10},
    {City: '台中市', Code: 'B', Number: 11},
    {City: '基隆市', Code: 'C', Number: 12},
    {City: '台南市', Code: 'D', Number: 13},
    {City: '高雄市', Code: 'E', Number: 14},
    {City: '新北市', Code: 'F', Number: 15},
    {City: '宜蘭縣', Code: 'G', Number: 16},
    {City: '桃園市', Code: 'H', Number: 17},
    {City: '嘉義市', Code: 'I', Number: 34},
    {City: '新竹縣', Code: 'J', Number: 18},
    {City: '苗栗縣', Code: 'K', Number: 19},
    {City: '南投縣', Code: 'M', Number: 21},
    {City: '彰化縣', Code: 'N', Number: 22},
    {City: '新竹市', Code: 'O', Number: 35},
    {City: '雲林縣', Code: 'P', Number: 23},
    {City: '嘉義縣', Code: 'Q', Number: 24},
    {City: '屏東縣', Code: 'T', Number: 27},
    {City: '花蓮縣', Code: 'U', Number: 28},
    {City: '台東縣', Code: 'V', Number: 29},
    {City: '金門縣', Code: 'W', Number: 32},
    {City: '澎湖縣', Code: 'X', Number: 30},
    {City: '連江縣', Code: 'Z', Number: 33}
  ]
  
  ID : any[] = []

  city = ''

  citynumber=''

  gender=''

  thirdNumber=''

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    // 第一位英文碼
    this.CityList.forEach((x)=>{
      if(x.City===this.citynumber){
        this.ID[0] = x.Number
      }
    })
    // 第二位性別碼
    if(this.gender==='1'){
      this.ID[1] = 1
    }else if(this.gender==='1'){
      this.ID[1] = 2
    }else{
      console.log('未選擇性別')
    }
    // 第三位身分碼
    if(this.thirdNumber=='5'){
      this.ID[2] = Math.floor(Math.random()*6)
    }else{
      this.ID[2] = parseInt(this.thirdNumber)
    }
    // 第4~9位流水號
    for(let i=3; i<9; i++){
      this.ID[i] = Math.floor(Math.random()*10)
    }
    // 第10位檢查碼
    this.ID[9] = 10-((Math.trunc(this.ID[0]/10)%10)*1+(this.ID[0])%10*9+this.ID[1]*8+
    this.ID[2]*7+this.ID[3]*6+this.ID[4]*5+this.ID[5]*4+
    this.ID[6]*3+this.ID[7]*2+this.ID[8]*1)%10
    // console.log(this.ID.join())
    this.CityList.forEach((x)=>{
      if(x.City===this.citynumber){
        this.ID[0] = x.Code
      }
    })
    console.log(this.ID.join(''))
  } 
}
