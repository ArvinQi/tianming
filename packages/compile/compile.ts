// TODO:compile app into static files
import path from 'path';
import process from 'process';
import {execSync} from 'child_process';

execSync('bit init', {
    stdio: 'stdio' ,
    cwd: path.join(process.cwd(), 'scripts')
}, (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

