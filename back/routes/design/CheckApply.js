const connection = require("../../configs/connection");

exports.CheckApply = (req, res, next) => {
  const parent_id = req.params.id;
  const user_id = req.params.uid;
  const check = () => {
    return new Promise((resolve, reject) => {
const sql = `SELECT COUNT(*) AS cnt FROM opendesign.design WHERE parent_design = ${parent_id} AND user_id = ${user_id};`
      connection.query(sql, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
console.error(err);
          reject(result);
        }
      });
    });
  };

  const success = (result) => {
    res.status(200).json({
      success: true,
      detail: result 
    });
  };

  const error = (err) => {
    console.error(err);
    res.status(500).json({
      success: false, 
      detaild: err
    });
  };

  check()
    .then(success)
    .catch(error);
};
