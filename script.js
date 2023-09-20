c=3;
function insert_Row(event) {
	
	let st=document.getElementById("sampleTable");
    let row = document.createElement('tr');
	row.innerHTML=`<td>Row${c} cell1</td> <td>Row${c} cell2</td>`;
	
  st.appendChild(row);
	c++;
  
}
