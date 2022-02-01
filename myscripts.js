// JavaScript Documentlet 
sortDirection = false;
    let personData = [
        {SEMESTER : 1, COURCE_CODE: 'CE 1201',SUBJECT_NAME :'Properties of Materials',GRADE:'B+',VALIDE :7 },
        {SEMESTER : 1, COURCE_CODE: 'CO 1201',SUBJECT_NAME :'Introduction to Computer System',GRADE:'B',VALIDE :6},
        {SEMESTER : 1, COURCE_CODE: 'EE 1201',SUBJECT_NAME :'Electrical',GRADE:'B',VALIDE :6},
        {SEMESTER : 1, COURCE_CODE: 'ME 1301',SUBJECT_NAME :'Engineering Machanics',GRADE:'A-',VALIDE :8 },
        {SEMESTER : 1, COURCE_CODE: 'ME 1202',SUBJECT_NAME :'Introduction to Thermodynamics',GRADE:'B',VALIDE :6},
        {SEMESTER : 1, COURCE_CODE: 'IS 1301',SUBJECT_NAME :'Mathematics',GRADE:'A',VALIDE :9},
        {SEMESTER : 1, COURCE_CODE: 'IS 1151',SUBJECT_NAME :'English for Communication',GRADE:'A',VALIDE :9},
        {SEMESTER : 1, COURCE_CODE: 'IS 1171',SUBJECT_NAME :'History of Science and Technology',GRADE:'B+',VALIDE :7},
        {SEMESTER : 1, COURCE_CODE: 'IS 1281',SUBJECT_NAME :'Engineering Measurement',GRADE:'B',VALIDE :6},
        //**********************************************************************************************************
        {SEMESTER : 2, COURCE_CODE: 'CE 1202',SUBJECT_NAME :'Introduction to Fluid Mechanics',GRADE:'C+',VALIDE :4 },
        {SEMESTER : 2, COURCE_CODE: 'CO 1302',SUBJECT_NAME :'Programming for Engineers',GRADE:'B+',VALIDE :7},
        {SEMESTER : 2, COURCE_CODE: 'EE 1302',SUBJECT_NAME :'Electronics',GRADE:'A',VALIDE :9},
        {SEMESTER : 2, COURCE_CODE: 'ME 1303',SUBJECT_NAME :'Basic Manufacturing Processes',GRADE:'B',VALIDE :6 },
        {SEMESTER : 2, COURCE_CODE: 'ME 1304',SUBJECT_NAME :'Engineering Drowing',GRADE:'B+',VALIDE :7},
        {SEMESTER : 2, COURCE_CODE: 'IS 1302',SUBJECT_NAME :'Engineering Mathematics II',GRADE:'C+',VALIDE :4},
        {SEMESTER : 2, COURCE_CODE: 'IS 1152',SUBJECT_NAME :'Presentation Skills English',GRADE:'A',VALIDE :9},
      
    ];
    window.onload = () => {
        loadTableData(personData);
    }
    function loadTableData(personData) {
        const tableBody = document.getElementById('tableData');
        let dataHtml = '';

        for (let person of personData) {
            dataHtml += `<tr><td>${person.SEMESTER}</td><td>${person.COURCE_CODE}</td><td>${person.SUBJECT_NAME}</td><td>${person.GRADE}</tb></tr>`;
        }
        tableBody.innerHTML = dataHtml;
    }
    function sortColumn(columnName,dataType) {
        sortDirection = !sortDirection;
        switch (dataType) {
            case "string":
                sortNumberColumn(sortDirection, columnName);
                break;
            case "number":
                sortNumberColumn(sortDirection, columnName);
                break;
            default:
        }
        loadTableData(personData);
    }
    function sortNumberColumn(sort, columnName) {
        personData = personData.sort((p1, p2) => {
            return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
        });
    }

  function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById('tableData');
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 0; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}