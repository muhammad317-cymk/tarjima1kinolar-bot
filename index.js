const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply("Assalomu alaykum! Kino kodini yuboring (masalan: 101 yoki 102):");
});

const kinolar = {
  "101": "🎬 **Kino nomi:** Qasoskorlar\n💾 **Sifati:** HD\n🔗 **Ko'rish:** https://t.me/kanalingiz/1",
  "102": "🎬 **Kino nomi:** Avatar 2\n💾 **Sifati:** Full HD\n🔗 **Ko'rish:** https://t.me/kanalingiz/2"
};

bot.on("message:text", async (ctx) => {
  const kod = ctx.message.text.trim();

  if (kinolar[kod]) {
    await ctx.reply(kinolar[kod], { parse_mode: "Markdown" });
  } else {
    await ctx.reply("Afsuski, ushbu kod bo'yicha kino topilmadi. Qaytadan tekshirib ko'ring.");
  }
});

bot.start();
