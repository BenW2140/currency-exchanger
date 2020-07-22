export class CurrencyExchanger {
  async getResponse() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (!response.ok) {
        jsonifiedResponse = false;
      } else {
        jsonifiedResponse = await response.json();
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }  
  }
}