/**
 * show content in table
 */
function showContentTable(dssv) {
  var updateTable = "";
  for (var i = 0; i < dssv.length; i++) {
    updateTable += `
    <tr>
        <th scope="row"> ${dssv[i].maSV} </th>
        <td> ${dssv[i].tenSV} </td>
        <td> ${dssv[i].email} </td>
        <td> ${dssv[i].dtb()} </td>
        <td> 
            <button class="btn btn-danger" onclick="removeSV(${
              dssv[i].maSV
            })">Xóa SV</button>
            <button class="btn btn-primary" onclick="editSV(${
              dssv[i].maSV
            })">Sữa SV</button>
        </td>
        
    </tr>`;
  }
  document.querySelector("#updateTable").innerHTML = updateTable;
}
