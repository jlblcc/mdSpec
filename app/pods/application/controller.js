import Controller from '@ember/controller';
import { computed } from '@ember/object';
import MemoryStream from 'memorystream';
import FileSaver from 'file-saver';
import moment from 'moment';


export default Controller.extend({
  modules: computed('model.@each.parent', function() {
    return this.get('model').filter(itm => {
      let p = itm.belongsTo('parent').id();
      return !p;
    });
  }),
  actions: {
    saveDb() {
      let db = this.store.adapterFor('project').db;
      let dumpedString = '';
      let stream = new MemoryStream();

      stream.on('data', function (chunk) {
        dumpedString += chunk.toString();
      });

      db.dump(stream).then(function () {
        console.log('Yay, I have a dumpedString: ' + dumpedString);
        FileSaver.saveAs(
          new Blob([JSON.stringify(dumpedString)], {
            type: 'application/json;charset=utf-8'
          }),
          `mdspec-${moment().format('YYYYMMDD-HHMMSS')}.json`
        );
      }).catch(function (err) {
        console.log('oh no an error', err);
      });
    }
  }


});