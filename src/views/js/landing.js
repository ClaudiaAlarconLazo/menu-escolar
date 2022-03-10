console.log("landing");
const access_token = sessionStorage.getItem("access_token");
const email = sessionStorage.getItem("email");
const table = document.getElementById("table");

axios
  .get("/api/v1/orders", {
    headers: {
      Authorization: access_token,
    },
  })
  .then((response) => {
    console.log(response);
    const isAdmin = email === "admin@junaeb.cl";
    const schoolColumn = document.getElementById("school-column");

    if (isAdmin) {
      schoolColumn.classList.remove('d-none');
      response.data.forEach((element, index) => {
        // Insertar nueva fila en la tabla
        const row = table.insertRow(index);

        // Insertar nuevas celdas en la fila
        const cellDate = row.insertCell(0);
        const cellSchool = row.insertCell(1);
        const cellM1 = row.insertCell(2);
        const cellM2 = row.insertCell(3);
        const cellM3 = row.insertCell(4);
        const cellM4 = row.insertCell(5);
        const cellM5 = row.insertCell(6);
        const cellButton = row.insertCell(7);

        // Poblar fila de celdas en table de html
        cellDate.innerHTML = element.date;
        cellSchool.innerHTML = element.school.name;
        cellM1.innerHTML = element.vegetarian;
        cellM2.innerHTML = element.celiac;
        cellM3.innerHTML = element.standard;
        cellM4.innerHTML = element.caloric;
        cellM5.innerHTML = element.ethnic;

        if (element.isRectified) {
          cellButton.innerHTML = `
          <p class="buttons">
            <button onclick="detail(${element.id})" class="button">Detalle
            </button>
          </p>`;
          row.classList.add("table-danger");
        }
      });
    } else {
      schoolColumn.classList.add('d-none');
      response.data.forEach((element, index) => {
        // Insertar nueva fila en la tabla
        const row = table.insertRow(index);

        // Insertar nuevas celdas en la fila
        const cellDate = row.insertCell(0);
        const cellM1 = row.insertCell(1);
        const cellM2 = row.insertCell(2);
        const cellM3 = row.insertCell(3);
        const cellM4 = row.insertCell(4);
        const cellM5 = row.insertCell(5);
        const cellButton = row.insertCell(6);

        // Poblar fila de celdas en table de html
        cellDate.innerHTML = element.date;
        cellM1.innerHTML = element.vegetarian;
        cellM2.innerHTML = element.celiac;
        cellM3.innerHTML = element.standard;
        cellM4.innerHTML = element.caloric;
        cellM5.innerHTML = element.ethnic;

        if (!element.isRectified) {
          cellButton.innerHTML = `
          <p class="buttons">
            <button onclick="rectify(${element.id})" class="button">Rectificar
            </button>
          </p>`;
          row.classList.add("table-success");
        } else {
          cellButton.innerHTML = `
          <p class="buttons">
            <button onclick="detail(${element.id})" class="button">Detalle
            </button>
          </p>`;
          row.classList.add("table-danger");
        }
      });
    }
  });
