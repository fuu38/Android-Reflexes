/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
document.getElementById("go_home").addEventListener("click", function() {
    window.location.href = "index.html"
})
document.getElementById("touchBox").addEventListener('touchstart', function() {
    $("#body").removeClass("start");
    $("#body").addClass("touching");
    document.getElementById("sentence").innerHTML = "画面が変わったら\n離して下さい";
    const delay = Math.random() * 10000;
    console.log(delay);
    setTimeout(leaveNow, delay);
})
document.getElementById("touchBox").addEventListener('touchend', function() {
    const time = new Date();
    const now = time.getTime();
    const result = now - window.standard;
    document.getElementById("sentence").innerHTML = "結果は" + String(result) + "msです";
    $("#body").removeClass("touchEnd");
    $("#body").addClass("result");
})

function leaveNow() {
    $("#body").removeClass("touching");
    $("#body").addClass("touchEnd");
    const time = new Date();
    window.standard = time.getTime();
    document.getElementById("sentence").innerHTML = "離せ！";
}