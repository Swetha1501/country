var app = new function () {
    var countries = [];
    var result;
    var mode = "";
    this.FetchAll = function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                result = xhr.responseText;

                countries = JSON.parse(result);

                app.printtable();
            }
        }
        xhr.open('GET', '/country', true);
        xhr.send(null);
    };




    this.printtable = function () {
        var object = JSON.parse(result);
        this.el = document.getElementById("countries");
        var data = '';
        for (var i in object) {
            data += '<tr>';
            data += '<td>' + object[i].id + '</td>';
            data += '<td>' + object[i].name + '</td>';
            data += '<td><button onclick="app.Edit(' + object[i].id + ')">Edit</button></td>';
            data += '<td><button onclick="app.Delete(' + object[i].id + ')">Delete</button></td>';
            data += '</tr>';
            data += '<br>';
            data += '<br>';
        }
        this.el.innerHTML = data;
    };


    this.Edit = function (id) {
        mode = "edit";
        document.getElementById('btn').innerHTML = "Update";
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].id == id) 
            {

                document.getElementById('id').value = countries[i].id;
                document.getElementById('name').value = countries[i].name;
            }
        }
    };


    this.saveorupdate = function () {
        var id = document.getElementById('id').value;
        var name = document.getElementById('name').value;
        if (mode == "")
         {
            alert("save called");
            alert("id" + id + "name  " + name);

            var url = "/country";
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == "200") {
                    app.FetchAll();
                }
            }
            xhr.open("POST", url + '?id=' + id + '&name=' + name, true);
            xhr.send(null);

            app.FetchAll();
        }
        else 
        {
            alert("update called");
            alert("id" + id + "name  " + name);

            var url = "/country";
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == "200") {
                    app.FetchAll();
                }
            }
            xhr.open("PUT", url + '?id=' + id + '&name=' + name, true);
            xhr.send(null);
            document.getElementById('btn').innerHTML = "Add";
            mode = "";
            app.FetchAll();
        }

        document.getElementById('id').value = "";
        document.getElementById('name').value = "";
    };




    this.Delete = function (id) {
        // console.log("delete called " + id);
        var url = '/country';
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", url + '?id=' + id, true);
        xhr.onload = function () {
            if (xhr.readyState == 4 && xhr.status == "200") {
                app.FetchAll();
            }
        }
        xhr.send(null);
        app.FetchAll();
    };
}

