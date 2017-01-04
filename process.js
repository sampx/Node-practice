/**
 * Created by Sam on 16/5/15.
 */

process.stdin.resume();
process.stdin.on('data',
    function(data) {
        process.stdout.write('read from console: ' + data.toString());
    }
);