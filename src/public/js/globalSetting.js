/*******************************************************************************
 * Copyright (c) 2017, Lawrence Livermore National Security, LLC.
 * Produced at the Lawrence Livermore National Laboratory.
 *
 * Written by Huu Tan Nguyen <htpnguyen@ucdavis.edu>.
 *
 * LLNL-CODE-740862. All rights reserved.
 *
 * This file is part of CallFlow. For details, see:
 * https://github.com/LLNL/CallFlow
 * Please also read the LICENSE file for the MIT License notice.
 ******************************************************************************/

var grayScale = chroma.scale();

// var distColorScale = ['#0000ff', '#0d0cff', '#1615ff', '#1d1cff', '#2221ff', '#2626ff', '#2a2bff', '#2e2fff', '#3133ff', '#3437ff', '#363aff', '#393eff', '#3b41ff', '#3d44fe', '#3f47fe', '#414afe', '#434dfe', '#4550fd', '#4652fd', '#4855fd', '#4958fc', '#4a5afc', '#4c5dfc', '#4d5ffb', '#4e61fb', '#4f64fa', '#5066fa', '#5168f9', '#526af9', '#536df8', '#546ff7', '#5471f7', '#5573f6', '#5675f5', '#5677f5', '#5779f4', '#577af3', '#587cf2', '#587ef2', '#5980f1', '#5982f0', '#5a83ef', '#5a85ee', '#5a86ed', '#5a88ec', '#5b8aeb', '#5b8bea', '#5b8de9', '#5b8ee8', '#5b8fe7', '#5b91e6', '#5c92e5', '#5c94e4', '#5c95e3', '#5c96e2', '#5c97e0', '#5c98df', '#5b9ade', '#5b9bdd', '#5b9cdb', '#5b9dda', '#5b9ed9', '#5b9fd7', '#5ba0d6', '#5aa1d4', '#5aa2d3', '#5aa3d2', '#5aa3d0', '#59a4cf', '#59a5cd', '#59a6cc', '#58a6ca', '#58a7c8', '#58a8c7', '#57a8c5', '#57a9c4', '#56a9c2', '#56aac0', '#55aabf', '#55abbd', '#54abbb', '#54acb9', '#53acb8', '#53acb6', '#52adb4', '#52adb2', '#51adb0', '#51adae', '#50aeac', '#4faeaa', '#4faea9', '#4eaea7', '#4daea5', '#4daea3', '#4caea1', '#4bae9e', '#4bae9c', '#4aae9a', '#49ae98', '#48ae96', '#48ad94', '#47ad92', '#46ad90', '#45ad8d', '#45ac8b', '#44ac89', '#43ac87', '#42ab84', '#41ab82', '#40aa80', '#3faa7e', '#3ea97b', '#3da979', '#3da876', '#3ca874', '#3ba772', '#3aa66f', '#39a66d', '#38a56a', '#37a468', '#35a365', '#34a363', '#33a260', '#32a15d', '#31a05b', '#309f58', '#2f9e56', '#2d9d53', '#2c9c50', '#2b9b4d', '#2a9a4b', '#289948', '#279845', '#259742', '#24953f', '#22943c', '#219339', '#1f9236', '#1e9133', '#1c8f30', '#1a8e2d', '#188d29', '#168b26', '#148a22', '#11881e', '#0f871a', '#0c8515', '#088410', '#05820a', '#028103', '#068100', '#108200', '#188400', '#1e8600', '#238700', '#288900', '#2d8a00', '#318c00', '#358d00', '#388f00', '#3c9000', '#409200', '#439300', '#469400', '#4a9600', '#4d9700', '#509800', '#539900', '#569b00', '#599c00', '#5c9d00', '#5f9e00', '#619f00', '#64a000', '#67a100', '#6aa300', '#6ca400', '#6fa500', '#72a500', '#74a600', '#77a700', '#79a800', '#7ca900', '#7eaa00', '#81ab00', '#83ab00', '#85ac00', '#88ad00', '#8aae00', '#8dae00', '#8faf00', '#91b000', '#93b000', '#96b100', '#98b100', '#9ab200', '#9cb200', '#9eb300', '#a0b300', '#a3b300', '#a5b400', '#a7b400', '#a9b400', '#abb500', '#adb500', '#afb500', '#b1b500', '#b3b500', '#b5b500', '#b6b600', '#b8b600', '#bab600', '#bcb600', '#beb600', '#c0b600', '#c1b500', '#c3b500', '#c5b500', '#c7b500', '#c8b500', '#cab500', '#ccb400', '#cdb400', '#cfb400', '#d0b300', '#d2b300', '#d3b300', '#d5b200', '#d6b200', '#d8b100', '#d9b100', '#dbb000', '#dcaf00', '#ddaf00', '#dfae00', '#e0ad00', '#e1ad00', '#e3ac00', '#e4ab00', '#e5aa00', '#e6a900', '#e7a800', '#e9a800', '#eaa700', '#eba600', '#eca500', '#eda300', '#eea200', '#efa100', '#f0a000', '#f19f00', '#f29e00', '#f39c00', '#f49b00', '#f49a00', '#f59800', '#f69700', '#f79500', '#f89400', '#f89200', '#f99100', '#fa8f00', '#fa8d00', '#fb8c00', '#fc8a00', '#fc8800', '#fd8600', '#fd8400', '#fe8300', '#fe8100', '#ff7f00', '#ff7c00', '#ff7a00', '#ff7800', '#ff7600', '#ff7400', '#ff7100', '#ff6f00', '#ff6c00', '#ff6a00', '#ff6700', '#ff6400', '#ff6100', '#ff5e00', '#ff5b00', '#ff5800', '#ff5500', '#ff5200', '#ff4e00', '#ff4a00', '#ff4600', '#ff4200', '#ff3e00', '#ff3900', '#ff3300', '#ff2d00', '#ff2700', '#ff1e00', '#ff1300', '#ff0000'];
var distColorScale = ['#08519c', '#4CAF50', '#ffbf00']; //light blue to green to amber
// var distColorScale = ['black', 'gray', 'white'];
// var distColorScale = [grayScale(1), grayScale(0.5), grayScale(0)];

var nodeRunTimeColorScale = 'OrRd';
