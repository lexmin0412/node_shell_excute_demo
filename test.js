var child = require( 'child_process' );

console.log('正在安装...')

child.exec( 'npm i tim-util -S', function ( err, sto )
{
  if ( !err ) {
    console.log('安装成功')
  }
  console.log( 'err', err, 'sto',
    sto ); //sto才是真正的输出，要不要打印到控制台，由你自己啊
} )