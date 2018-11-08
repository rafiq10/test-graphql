const graphql = require('graphql')

module.exports = new graphql.GraphQLObjectType({
  name: 'accBooks',
  description: 'This represents accounting table',
  fields: () => {
    return {
      numProject: {type: graphql.GraphQLString},
      myMonth: {type: graphql.GraphQLInt},
      myYear: {type: graphql.GraphQLInt},
      country: {type: graphql.GraphQLString},
      ingresos: {type: graphql.GraphQLFloat},
      MODI: {type: graphql.GraphQLFloat},
      ComReal: {type: graphql.GraphQLFloat},
      ComProvAlt: {type: graphql.GraphQLFloat},
      ComProvBaj: {type: graphql.GraphQLFloat},
      ComProv: {type: graphql.GraphQLFloat},
      COM: {type: graphql.GraphQLFloat},

      MoinReal: {type: graphql.GraphQLFloat},
      MoinProvAlt: {type: graphql.GraphQLFloat},
      MoinProvBaj: {type: graphql.GraphQLFloat},
      MoinProv: {type: graphql.GraphQLFloat},
      MOIN: {type: graphql.GraphQLFloat},

      OtrReal: {type: graphql.GraphQLFloat},
      OtrProvAlt: {type: graphql.GraphQLFloat},
      OtrProvBaj: {type: graphql.GraphQLFloat},
      OtrProv: {type: graphql.GraphQLFloat},
      OTR: {type: graphql.GraphQLFloat},

      OPEX: {type: graphql.GraphQLFloat},
      MG: {type: graphql.GraphQLFloat},

      CAPEX: {type: graphql.GraphQLFloat},
      AMTZ: {type: graphql.GraphQLFloat},
      OGNO: {type: graphql.GraphQLFloat},

      FacturacionFX: {type: graphql.GraphQLFloat},
      Facturacion: {type: graphql.GraphQLFloat},
      
      sumIngresos: {type: graphql.GraphQLFloat},
      sumModi: {type: graphql.GraphQLFloat},
      
      sumComReal: {type: graphql.GraphQLFloat},
      sumComProvAlt: {type: graphql.GraphQLFloat},
      sumComProvBaj: {type: graphql.GraphQLFloat},
      sumComProv: {type: graphql.GraphQLFloat},
      sumCOM: {type: graphql.GraphQLFloat},

      sumMoinReal: {type: graphql.GraphQLFloat},
      sumMoinProvAlt: {type: graphql.GraphQLFloat},
      sumMoinProvBaj: {type: graphql.GraphQLFloat},
      sumMoinProv: {type: graphql.GraphQLFloat},
      sumMOIN: {type: graphql.GraphQLFloat},

      sumOtrReal: {type: graphql.GraphQLFloat},
      sumOtrProvAlt: {type: graphql.GraphQLFloat},
      sumOtrProvBaj: {type: graphql.GraphQLFloat},
      sumOtrProv: {type: graphql.GraphQLFloat},
      sumOTR: {type: graphql.GraphQLFloat},

      sumOPEX: {type: graphql.GraphQLFloat},
      sumMG: {type: graphql.GraphQLFloat},

      sumCAPEX: {type: graphql.GraphQLFloat},
      sumAMTZ: {type: graphql.GraphQLFloat},
      sumOGNO: {type: graphql.GraphQLFloat},

      sumFacturacionFX: {type: graphql.GraphQLFloat},
      sumFacturacion: {type: graphql.GraphQLFloat},

    };
  }
});