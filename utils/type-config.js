/**
 * @author [xueyan]
 * @email [yanxue@aijiatui.com]
 * @create date 2020-08-12 17:34:10
 * @modify date 2020-08-12 17:45:08
 * @desc [不同类型的交互参数]
 */

const inquirer = require("inquirer")


const allType = {
 // 输入框
 typeForInput: [
  {
   type: 'input',
   name: 'value',
   message: '请输入您的名字',
   default: 'test_user',
  }
 ],
 // 确认框
 typeForConfirm: [{
  type: 'confirm',
  name: 'value',
  message: '是否确定选择？',
  default: { value: 'Yes' }
 }],
 // 列表
 typeForList: [{
  type: 'list',
  name: 'value',
  message: '请选择一种水果',
  choices: [
   { name: "Apple         >苹果", value: 'apple' },
   { name: "Pear          >梨", value: 'pear' },
   { name: "Banana        >香蕉", value: 'banana' },
  ]
 }],
 // 原生列表
 typeForRawlist: [{
  type: 'rawlist',
  name: 'value',
  message: '请选择一种水果',
  choices: [
   { name: "Apple         >苹果", value: 'apple' },
   { name: "Pear          >梨", value: 'pear' },
   { name: "Banana        >香蕉", value: 'banana' },
  ]
 }],
 // 扩展
 typeForExpand: [{
  type: 'expand',
  name: 'value',
  message: '请选择一种水果',
  choices: [
   {
    key: "a",
    name: "Apple         >苹果",
    value: 'apple'
   },
   {
    key: "O",
    name: "Pear          >梨",
    value: 'pear'
   },
   {
    key: "p",
    name: "Banana        >香蕉",
    value: 'banana'
   }
  ]
 }],
 // 原生列表
 typeForCheckbox: [{
  type: 'checkbox',
  name: 'value',
  message: '请选择颜色',
  choices: [
   new inquirer.Separator('--------------------------'),
   { name: "Red         >红", value: 'red', checked: true },
   { name: "Yellow      >黄", value: 'yellow' },
   { name: "Green       >绿", value: 'green' },
   { name: "Pink        >粉", value: 'pink' },
   new inquirer.Separator('--------------------------'),
  ],
 }],
 typeForPassword: [
  {
   type: "password",
   message: "请输入密码：",
   name: "value"
  }
 ],
 typeForEditor: [
  {
   type: "editor",
   message: "请输入备注：",
   name: "value"
  }
 ],
}

module.exports = allType

