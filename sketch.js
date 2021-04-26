const key = 'pk.eyJ1IjoibW9sbGx5ZWxpemFiZXRoNDEiLCJhIjoiY2ttMmQydTd1MTZ0dTJucW1qNXZiMmNpdiJ9.lw7KPb3NXJ097ANRbj-N4w';

const options = {
  lat: 39.34068,
  lng: -82.06684,
  zoom: 12,
  style: 'mapbox://styles/molllyelizabeth41/ckn5a5bui0d3j17jytxo1d14v',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;



function setup() {
  var newDiv = document.getElementById('p5');
  var width = newDiv.offsetWidth;
  var height = newDiv.offsetHeight;
  var canvas = createCanvas(775, 1000);
  canvas.parent('p5');
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);


   img = createImg('https://lh3.googleusercontent.com/5mH35XoWY0wRM3ah0YFC8ulZ_DFk5oS2lQeVn9pVcNJzXmPC2F0hf3aCRsfPFmIp8AhG5o9uCxLcC1ceQm947fbjR1EKD97oNNUTUus0mgBsa4Ddml_g10mlyn6a6P9pYOYLQC_ecxgDcYeuTlj1tMiQR4lVtgSFpyMXMJU9XYMnL3h5Z8OqwUTx8T3SRAqvOESYkR5uxVa1ZcE669StZLsT9XT8CvpOgSZM8TrstZfQ8oELfNZw1jw3BCkbhiqddXbaUFCLSWYKutpgaAk5IJcphDAmzR1UX052xLgcz-kpc-mvMJmfmxsdnBVqktLS2j_3e23wWLWW4hmXGhGg4QW_ovP7ujQx958WnPLMCVlfZVm1arjhiFlfQOrfTSViVGWtFFAdSuRgoGXgz0UWQFd9aitsvqD6cgD1j-v-iHVuh6KvnWoB__UlKUXg1qTV4n6MF-UkjhTF_aVXobzpEn4vnP6n4-67kKlQL8xMaWmejB-VQH-ADnJdjFfdTE_jXWgN5Ql_N3i-1NnzeQfUoL7TgTSe_dHiSzeKGg6oZs9RhCBnw64l7aLz7vxxwEr6syRNMwoDh-bgaBX5Aecc7hED0TqBTwoIf7XHs4EgupjfXARUNavFelR93HAtY3DPu7N8Z38-P6f21jIbETkJyZ0x4Vvuw6BBSJEz6-LSiBD8W40SEdVCzPOx2R_hNF3XtX5TCVz7konzmq4CgJlfu30=s1885-no?authuser=0');
  img.hide();
  imgwt=createImg('https://lh3.googleusercontent.com/wXa5oXfgB1jC9r5xcXGfd28NRimryGHjM0gxjpPImQ_7G-fE7JA_QQa9BAK8V0etr4QQDowQrYASkV3XnDGSPy9YaCy66amxIwWyUmcHTWtbOnSHq2jhWHSDw-Ths5uqfaMiQnJdGzYQ-cicy2VQyQjAvtO0ulBQQ0h4_9Iq_zCj_mHhVgDwWApVSDnd-b1eKjqkBbn1IeBO3bt0KsEglWs8P_xBTy4lQ4cfO8xKY5m4SXBsG0ytiW6NRk3cgLX1K7w3sDY2NPa8J6c5_5YBukbqvWR25woLkMXSQEul6-nJMERLaSUFi2pqyRAUv-J75a8DrPZavly-KpKw-vLaixkQ0sfPBFa3kPvTnxUCkYM2PYvLnY9fhEkXJ9IAk5ERgqHEwUOElSHwxhZ-gm__VKN1VqG04neYJJu8u9XiAtqyM17b1C3MKpWfll4QzuFEzIKc0ryiNlixD8jlnCBdIPy-LPHZ77nQO6WmVPaSf3_1RzRmmlRUGsDT4KdkX_pXde5lih-NIxRaPtfQstNg-V4bs6INILEp5R9xdUSQ0YGN0o0Vh8cziinD4LtTlSgUEZsNDI9EiehV2bT1GhOArV5eyNCIYOiAFmW-EErpfvSlAQrcfs6FBJEV8iarCpi-dtFKpgFtEOSisa6czYlF3fuVYle6pnqKIEiwbijaKeWigwWBD-BD81_qGqWUQ793aeU5nyxPk5K92QZxXNnhgWw=s1885-no?authuser=0');
  imgwt.hide();

imgwp=createImg('https://lh3.googleusercontent.com/VIcoYKt1TFvK6oTaMTHeGIm2mZ2W-_-qLS7UcA6HGGuhAkYmYV9ji2XVYSUaTc7V_RmAjp3WwPSqOIRFmtorog__7867N4m51nSX6HU4sgnsDTsLLOF-Fkz9UBlKLX6c7otvHKDYZBiV5irzyoPK3OAmlccKGCKmi54LGzO8-lxVI5skHSDMFKbsYS9p6DUfUPxHb3HfIpAsGpVHWFExLrpmiTerGeUAA9Qv7OGoBI3e6gUJE2_KczZSPww-9rvcA_m2CO4bl-rY5xAOQLfgkVT7M1tu8vaJqJ5rnwK9Z2Tbm1eMCYd9JMIsqjotUZGhayj5ylzaRKIaMdzr2DAegfVOdAKXUXaheV1jCqZC8aiT_dVlud49uRHtwvFgLBQkSzB_2AX2JzhNlZZAthtW5DrwmlPRWqeezxoY-rG3SqRE5jioRcwFUwGWCr8maQQioFSNtHu-TPrX1wL7DMPk7_lZREH1MBgHNmUzd0y_iy0OYUdjvvkaov_jgCDT8MkS-jw1dtcvtd6TfRK0-jDW4wWEBsIgqwPhtdPQAGJLXiSxx20K6Pgy03p9jgs_2bAOtnbDAysOYopYNquGiIfPYzK3NgIdfqD6xGetGRVkytOU1KWat71dIaJ4KFWCpN1CBjtEa3mED4cNeY7tiAaQTjF7fBDNGqGexZ710_bmlLOABJRKBQRd6khNzT8gi_zHN0rzfX6jEpk3oSe-zny2gbY=s1885-no?authuser=0');
  imgwp.hide();
  
imgc=createImg('https://lh3.googleusercontent.com/GJthIrJGmfzk_TAjpepKI78kefafe-_7Vc3DoOSNt2eeNvyvlO-Q-VicMIdQt-OjH9uOuu-TTfSaSJBbJP9xPKdv2eh8momBexI3vg5GjlV-O1Scgv68X4QXIblLmna36cfbDWlUDC-3Xdv01Hgf6MrSrdleDrfueUk5JtFzLaFVDtw5ytFbtWT4DpotXP3TXQFeqSjsNLfpeBRja89P3ludEoPwoifLYkm3HdCJWxKNvYpl9g3BQb4O4SD6Lf2Q6Ms8vVpnDCZG476binxhRT4Rj2ukA91e76fUFRTHsv5VhWWD79U2THdQYLiOw6-HmWvNVpUFK501fMFOBzJ5wZymuiLhjttVfh30Amh_Oun9Kocn_ZaJEpWKlB4Nj6VuSwmdVNTUZh7Tiyg44DJnNezmqldMorZfu2GU7JPgoSw0ftvzOXq6JJIGbX5KXrga545K4HOmd11XZdH10pVq-WNOvFy2QTmJXnhg3Zjzn6kg2Pn1Tu22pNvgptlLmRwu9clinl-dKohN-E5YMHxfe4R1V6OxJoZuSEUQlOykgx850sXIVnSIsjrZEydINGKGZ8HtwQF0voce-llHPfPuZA-4zCGawDq6koaIPJdVm0iNoSbxVLMMecgo_sWR1Tl-zr93IQu_tkSCP52NQoppNX0ezNIjSjOuPJ7nc_73VvTy2u5ZeqSrge1QtaUwA85U9-YnecIceMNyfXeZAsqIlyc=s1885-no?authuser=0');
  imgc.hide();
  
imgcp=createImg('https://lh3.googleusercontent.com/7dnNLokG-itAANFWctmMceIW0copzGrTF_69YitnAIxOz6WngUyjdZVvG5RyZHhDcfZrpJhlfIel8dk_J972SKfBX6hDhcuwtvw14mr2AC6QBmCAn9aWxjufv2IvD2jiPbpYNK_ghDzQtv6xSJ6hzb4y0bfRvmLlMODLwjhyWrQEIZGYQjkqHhxFEVkUXibkxZa6cvk2uMCMyxJpQZLHwMrStvQehfAX9OmrwDV_jmyCc8iG3g90-U_j1B2GiJszj3R9dFCscu8LvcchYy745_saIMADAUM7MNZA9Xb8gYl1Sq-rIcquQvkXkugV51dLGvvyS2-RNfpOq6MAorx6a1axxhrVs4RQu30y2hQqGAEtwZBugSb8269YOBVLPjV5V9sCJ4xyZ7W17KYHy_baaauwIY8ZnXsh5RNe9Xzr6gLvVG9d3lCijG0jHyuIKl0D-qv6StB-B81jS-vGVg32WnEJohUnz_VxVcsdyc7dlewbg-oc0s4XEWGRJOFJ8JnXGr7OEdDoL2dk-QCy4icPQJ8gH_XHcYIWluiHNr0XsDVMIkeSkFYQxBxzn1IGoj-hIAz8luu1Pa3BGAzzKvD205zvegy8ubahPOOBqRWVSI-WnIREhxVX2C1n6p2IFQ2r-7wiRMEisGPl7IroYifEgLc-cQM2YgOGIxOjQbFc54lIZYYzW5eJZsFNeWClwt3R0_mSMXUaP0ZIbCb7rgJyDQA=s1885-no?authuser=0');
  imgcp.hide();
  
imgct=createImg('https://lh3.googleusercontent.com/rMoKrtoct1_0yTi9OADRZiThdWY4YwEbgXSBX_zHjOwaU_qdvJfTu47AQL1ylmiSP1tpqUrb7yvTAZrlydNetbvHY_THP0yczeioudywkIPdjLnFbQHeJ_e9Xrv-EpWWFpKuMalQUmTk_MU_uD0FUpH7wrxd7RwSeLgHy-tkLMBnVWDwihBxN-5Nh-JwiFqQFjsSdm_lGSdqSnj5XjUJnaQ23mh7g1DbvDzuidLAMIxUn6ZtCDAU0ZP3ZQ8ncnOa5F-pem_eUW6ppksBjeUs_j5v9EtlZEoCuVAJeu4J6UKK9lgUe1udFuOh3OPoy-ZogZt9lCIsc6V8WOF5JoIuLGAFbuHWeIH9BoGZHqrkf6pbFfTQooyWQMvHGfBloMhlaoFwM5AWdkOqwv4MpqWfb_Sc1JekTdagotBgyk1vvPoAguhdJ9pJ9ROslwXNZuUPJK-lnFyNq5a9pTuPSPnF_NBtSnRocvKmh-4qcRW22-I_mOrzqcvcycK4JzUqmaij3a1zgHfG8lr8u4cYo1FXkfNFg5VhGJKYcVnV5njoFI0hvETEzstJxILjF0kepH55o-hHq9cAFv6YM0SLc7090cv7kJzI9lWxr2Fn09GD915rzQbRnLgB_s21yInAWVjvMor3n6Tjc9WC8T24fGpKvzFl3jGfIJoZ3uK6F2jJ2efXlQDl83kjux8Y4eFw8sT8lWjvWUQnXvshT-18i8fjqKs=s1885-no?authuser=0');
  imgct.hide();


}


function draw() {

}

function mouseMoved() {
  drawPoint();
}

function drawPoint() {
  clear();
  //noFill();
  stroke(000);
  strokeWeight(3);
  const zoom = myMap.zoom();

  const coad = myMap.latLngToPixel(39.34068, -82.06684);

  ellipse(coad.x, coad.y, 5 * zoom, 5 * zoom);


  if (dist(coad.x, coad.y, mouseX, mouseY) < (zoom * 10) / 2) {
    //myMap.lat = 70.000;
    //myMap.lng = 90.000;
    textSize(32);
    noFill();
    //text("COAD Bouldering", coad.x, coad.y-10);
    image(imgc,coad.x,coad.y,500,500);
    fill(0, 100);
  } else {
    fill(255, 100);
  }
   const coadparking = myMap.latLngToPixel(39.343367,-82.074543);

  ellipse(coadparking.x, coadparking.y, 1 * zoom, 1 * zoom);


  if (dist(coadparking.x, coadparking.y, mouseX, mouseY) < (zoom * 10) / 2) {

    textSize(32);
    noFill();
    //text("parking for COAD Bouldering", coadparking.x, coadparking.y-10);
    image(imgcp,coadparking.x,coadparking.y,500,500);
    fill(0, 100);
  } else {
    fill(255, 100);
  }
   const coadtrailhead = myMap.latLngToPixel(39.343498, -82.074538);

  ellipse(coadtrailhead.x, coadtrailhead.y, 1 * zoom, 1 * zoom);


  if (dist(coadtrailhead.x, coadtrailhead.y, mouseX, mouseY) < (zoom * 10) / 2) {

    textSize(32);
    noFill();
    //text("COAD Bouldering trail head", coadtrailhead.x, coadtrailhead.y-10);
    image(imgct,coadtrailhead.x,coadtrailhead.y,500,500);
    fill(0, 100);
  } else {
    fill(255, 100);
  }
  const witches = myMap.latLngToPixel(39.3226, -82.0877);

  ellipse(witches.x, witches.y, 5 * zoom, 5 * zoom);

  if (dist(witches.x, witches.y, mouseX, mouseY) < (zoom * 10) / 2) {

    textSize(32);
    noFill();
    //text("Witches Bouldering", witches.x, witches.y-10);
    image(img,witches.x,witches.y,500,500);

    fill(0, 100);
  } else {
    fill(255, 100);
  }
   const witchesparking = myMap.latLngToPixel(39.324773, -82.087108);

  ellipse(witchesparking.x, witchesparking.y, 1 * zoom, 1 * zoom);


  if (dist(witchesparking.x, witchesparking.y, mouseX, mouseY) < (zoom * 10) / 2) {

    textSize(32);
    noFill();
    //text("Parking for Witches bouldering", witchesparking.x, witchesparking.y-10);
    image(imgwp,witchesparking.x,witchesparking.y,500,500);

    fill(0, 100);
  } else {
    fill(255, 100);
  }
  const witchestrailhead = myMap.latLngToPixel(39.324759, -82.087446);

  ellipse(witchestrailhead.x, witchestrailhead.y, 1 * zoom, 1 * zoom);


  if (dist(witchestrailhead.x, witchestrailhead.y, mouseX, mouseY) < (zoom * 10) / 2) {

    textSize(32);
    noFill();
    //text("Witches bouldering trail head", witchestrailhead.x, witchestrailhead.y-10);
    image(imgwt,witchestrailhead.x,witchestrailhead.y,500,500);

    fill(0, 100);
  } else {
    fill(255, 100);
  }
 
}

$(window).bind('resize', function(e) {
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function() {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});