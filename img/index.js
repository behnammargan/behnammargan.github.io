$(document).ready(function() {
  var table = []
  var dataSet = [
  ];

  dtable(dataSet)  

  setTimeout(mainloop(), 20000)
  //mainloop()
//   const maxGrowthValue = Math.max.apply(Math, dataSet.map(function(item) { return Math.abs(item.growth); }));

// var data = 5;
//     const isPositive = (Number(data) > 0);
//     const barWidth = 100 / maxGrowthValue * Math.abs(Number(data)) * 0.5;
//     const $growthBarContainer = $('<div>', {
//       class: "growth-bar",
//     });
//     const $growthBar = $('<div>', {
//       class: "bar bar-" + (isPositive ? 'positive' : 'negative'),
//     });
//     $growthBar.css({
//       width: barWidth.toFixed(2) + '%',
//     });
//     $growthBarContainer.append($growthBar);
//     $growthNumber = $('<div>', {
//       class: "growth-number",
//     });
//     $growthNumber.text(data + '%');
//     $growthBarContainer.append($growthNumber);
//     return $growthBarContainer.prop("outerHTML");


  
var cc = []

var dataSet1 = [] ;
 async function mainloop(){

  //$( "#example" ).empty();
  id = ["66682662312253625","65023851436340574","66036975502302203",
  "15451317146134956","28788598290160782","69067576215760005",
  "33887145736684266","11427939669935844","64942549055019553","22839330962768817","12390706505809150","33254899395816171","34144395039913458","46700660505281786"]
  var bb = []
  var element = [];
  var names = ["آساس","کاردان","فیروزه","افق ملت","الماس","کاریس","آگاس","اطلس","سرو","آتیمس","گوهر","زر","عیار","طلا"]
  
  console.log(names[0])
  for (let index = 0; index < id.length; index++) {
  //element[index] = bubble(id[index]);
  //  bb[index] = bubble(id[index]).then(function(users) {
  //   return users;})
  bb[index] =  await bubble(id[index]);
  dataSet[index] = {companyName: names[index], growth: ((bb[index][1]-bb[index][0])*100/bb[index][0]).toFixed(2)}

  }  
  console.log(bb)
  console.log(dataSet1)

  setTimeout(mainloop(), 200000)
//  $('#example').DataTable().ajax.reload();

//  dataSet = [
//   { companyName: "SAlammm", growth: 1 },
//   { companyName: "Company B", growth:  31 },
//   { companyName: "Company C", growth:   7 },
//   { companyName: "Company D", growth:   0 },
//   { companyName: "Company E", growth: -29 },
//   { companyName: "Company F", growth:  23 },
// ];

await $( "#example" ).remove( );
await $( "#example_wrapper" ).remove( );

    //  table
    //  .clear()
    //  .draw();

     $( "body" ).append( "<table></table>" );
     $("table").css("width","100%")
     .attr("id", "example")


dtable(dataSet) 




  // table
  // .rows()
  // .invalidate()
  // .draw();

}


    async function bubble (id){
    //console.log(id)
    var bubb = []
    await
    $.get( `http://www.tsetmc.com/tsev2/data/instinfodata.aspx?i=${id}&c=68+&e=1`, function( data ) {
      //sarv
      var res = data.split(",");
      //console.log(res[2])
      var NAV =  (res[15])
      NAV = NAV.split(";")[0];
      var final = res[3];
      //var NAV =  (res[0])
     // console.log(NAV)
     // console.log(final)
       bubb = [Number(NAV),Number(final)]
      
    });
    return bubb

  }

  //bubble ()




//   $('#example').DataTable( {
//     stateSave: true
// } );







function dtable(dataSet){

  
    // Get absolute maximum value of grwoth from dataset
    const maxGrowthValue = Math.max.apply(Math, dataSet.map(function(item) { return Math.abs(item.growth); }));
    
     table = $('#example').DataTable({
      data: dataSet,
      paging: false,
      "order": [[ 1, "desc" ]],
      columns: [
        {
          data: 'companyName',
          title: "Company Name",
        },
        {
          data: 'growth',
          title: " growth, %",
          // Custom render the cell of the growth-column
          render: (data, type, row, meta) => {

           // console.log(data)
            const isPositive = (Number(data) > 0);
            const barWidth = 100 / maxGrowthValue * Math.abs(Number(data)) * 0.5;

            const $growthBarContainer2 = $('<div>', {
              class: "behnam-bar",
            });
            const $growthBarContainer = $('<div>', {
              class: "growth-bar",
            });
            const $growthBar = $('<div>', {
              class: "bar bar-" + (isPositive ? 'positive' : 'negative'),
            });



            $growthBar.css({
              width: barWidth.toFixed(2) + '%',
            });
            $growthBarContainer.append($growthBar);
            $growthNumber = $('<div>', {
              class: "growth-number",
            });
            $growthNumber.text(data + '%');
            $growthBarContainer2.append($growthBarContainer)
            $growthBarContainer2.append($growthNumber);
            return $growthBarContainer2.prop("outerHTML");
          },
        },
      ],
    });
  


  }


  });