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
const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

// ADMIN ID va KANAL NOMI (Shu yerlarni o'zingiznikiga o'zgartiring)
const ADMIN_ID = 123456789; // Telegram ID'ingizni yozing (masalan: @userinfobot dan bilish mumkin)
const KANAL_USERNAME = "@kanalingiz_username"; // Majburiy obuna kanali username'i (masalan: @mykinolar)

const kinolar = {
  "101": "🎬 **Kino nomi:** Qasoskorlar\n💾 **Sifati:** HD\n🔗 **Ko'rish:** https://t.me/kanalingiz/1",
  "102": "🎬 **Kino nomi:** Avatar 2\n💾 **Sifati:** Full HD\n🔗 **Ko'rish:** https://t.me/kanalingiz/2"
};

// Kanal obunasini tekshirish funksiyasi
async function checkSub(ctx) {
  try {
    const member = await ctx.api.getChatMember(KANAL_USERNAME, ctx.from.id);
    return ["creator", "administrator", "member"].includes(member.status);
  } catch (error) {
    console.error("Obuna tekshirishda xato:", error);
    return true; // Xatolik bo'lsa foydalanuvchini bloklab qo'ymaslik uchun
  }
}

// /start buyrug'i
bot.command("start", async (ctx) => {
  const isSub = await checkSub(ctx);

  if (!isSub) {
    return ctx.reply(
      `⚠️ Botdan foydalanish uchun rasmiy kanalimizga obuna bo'ling:\n\n👉 ${KANAL_USERNAME}\n\nObuna bo'lgach, qayta /start bosing.`,
      { disable_web_page_preview: true }
    );
  }

  await ctx.reply("Assalomu alaykum! Kino kodini yuboring (masalan: 101 yoki 102):");
});

// /admin buyrug'i
bot.command("admin", async (ctx) => {
  if (ctx.from.id !== 8731925710) {
    return ctx.reply("Afsuski, ushbu kod bo'yicha kino topilmadi. Qaytadan tekshirib ko'ring.");
  }

  await ctx.reply(
    "👨‍💻 **Admin panelga xush kelibsiz!**\n\n" +
    `📊 Baza dagi kinolar soni: ${Object.keys(kinolar).length} ta\n\n` +
    "Yangi kino qo'shish uchun `index.js` fayliga kodingizni qo'shing."
  );
});

// Text xabarlarni qayta ishlash
bot.on("message:text", async (ctx) => {
  const isSub = await checkSub(ctx);

  if (!isSub) {
    return ctx.reply(
      `⚠️ Botdan foydalanish uchun kanalimizga obuna bo'ling:\n\n👉 ${vexor_kino}`,
      { disable_web_page_preview: true }
    );
  }

  const kod = ctx.message.text.trim();

  if (kinolar[kod]) {
    await ctx.reply(kinolar[kod], { parse_mode: "Markdown" });
  } else {
    await ctx.reply("Afsuski, ushbu kod bo'yicha kino topilmadi. Qaytadan tekshirib ko'ring.");
  }
});

bot.start();
