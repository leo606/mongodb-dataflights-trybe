const EMPRESA_NAME = "PASSAREDO";

db.resumoVoos.insertOne({
  empresa: EMPRESA_NAME,
  totalVoosDomesticos: db.voos.find(
  {
    "empresa.nome": EMPRESA_NAME,
    natureza: "Doméstica",
  },
).count(),
});

db.resumoVoos.findOne(
  {
    empresa: EMPRESA_NAME,
  },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
);
