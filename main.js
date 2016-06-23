console.log("main.js loaded");

///////////////// CATEGORIES JSON INTERACTION
function getCategories() {
  return new Promise((resolve, reject) => {
    $.ajax("json/categories.json").done(function(data){
      resolve(data);
    }).fail(function(xhr, status, error){
      reject(error);
    });
  });
};

getCategories().then(function(data){
  console.log("Get Categories ", data);
  // console.log(">>> categories include", );
  // console.log(">>> categories include", );
},function(error){
  console.log("Category error",error );
});


///////////////// TYPES JSON INTERACTION
function getTypes() {
  return new Promise((resolve, reject) => {
    $.ajax("json/types.json").done(function(data){
      resolve(data);
    }).fail(function(xhr, status, error){
      reject(error);
    });
  });
};

getTypes().then(function(data){
  console.log("Get Types ", data);
},function(error){
  console.log("Types error",error );
});


///////////////// PRODUCTS JSON INTERACTION
function getProducts() {
  return new Promise((resolve, reject) => {
    $.ajax("json/products.json").done(function(data){
      resolve(data);
    }).fail(function(xhr, status, error){
      reject(error);
    });
  });
};

getProducts().then(function(data){
  console.log("Get Types ", data);
},function(error){
  console.log("Types error",error );
});

////////////////////For Use when populating DOM
// $('.dropdown-toggle').dropdown()

