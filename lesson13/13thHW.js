//Зробити розпорядок дня / to do list різними варіантами

// setTimeout(()=>{
//     let time = 0;
//     console.log('Sleep', time);
//     setTimeout(()=>{
//         time +=4;
//         console.log('Still sleep', time)
//         setTimeout(()=>{
//             time +=4;
//             console.log('Wake up', time)
//             setTimeout(()=>{
//                 time +=1;
//                 console.log('Have breakfast', time)
//                 setTimeout(()=>{
//                     time +=4;
//                     console.log('Have lunch', time)
//                     setTimeout(()=>{
//                         time +=4;
//                         console.log('Go shopping', time)
//                         setTimeout(()=>{
//                             time +=4;
//                             console.log('Have dinner', time)
//                             setTimeout(()=>{
//                                 time +=3;
//                                 console.log('Go to sleep', time)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)


// new Promise((resolve,reject)=>{
//     let time = 0;
//     setTimeout(()=>{
//         console.log('Sleep', time)
//         time+=8
//         resolve(time)
//     },1000)
// })
//     .then((time)=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log('Wake up', time);
//                 time++;
//                 resolve(time);
//             },2000)
//         })
//     })
//     .then((time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Have a breakfast', time);
//             time+=4;
//             resolve(time);
//         },1000)
//     })
// })
//     .then((time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Do JS homework', time);
//             time+=4;
//             resolve(time);
//         },1000)
//     })
// })
//     .then((time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Have a dinner', time);
//             time+=4;
//             resolve(time);
//         },2000)
//     })
// })
//     .then((time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Have a supper', time);
//             time+=3;
//             resolve(time);
//         },1000)
//     })
// })
//     .then((time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Go to sleep', time);
//             time++;
//             if (time>=24){
//                 reject('day over')
//             }
//             resolve(time);
//         },2000)
//     })
// })
//     .catch(reason=>console.log(reason))


function timeoutFn(time,ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('time of the day', time);
            time++;
            if (time>=24){
                reject('end of day')
            }
            resolve(time)
        },ms)
    })
        .catch(reason => console.log(reason))
}

timeoutFn(0,1000)
    .then(value=>{
        return timeoutFn(value,2000)
    })
    .then(value => timeoutFn(value,3000))