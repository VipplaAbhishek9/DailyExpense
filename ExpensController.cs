using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DailyExpense.Models;

namespace DailyExpense.Controllers
{
    public class ExpensController : ApiController
    {
        private Daily_ExpenseEntities db = new Daily_ExpenseEntities();

        // GET: api/Expens
        public System.Object GetExpenses()
        {
            var getExpenses = (from exp in db.Expenses
                               join cat in db.Categories on exp.CatID equals cat.CatId
                               select new
                               {
                                   exp.Amount,
                                   exp.CategoryDescription,
                                   exp.EDate,
                                   exp.CatID,
                                   exp.EID,
                                   cat.CategoryName, 
                               }).ToList();

            var getAmount = (from exp in db.Expenses
                             join cat in db.Categories on exp.CatID equals cat.CatId
                             group exp by new
                             {
                                 cat.CategoryName,
                                 cat.CatId
                             }
                            into grp
                             select new
                             {
                                 CategoryName = grp.Key.CategoryName,
                                 Totalamt = grp.Sum(g => (g.Amount))
                             }).ToList();


            return  Ok(new{ getExpenses,getAmount});
        }

        // GET: api/Expens/5
        [ResponseType(typeof(Expens))]
        public IHttpActionResult GetExpens(int id)
        {
            Expens expens = db.Expenses.Find(id);
            if (expens == null)
            {
                return NotFound();
            }

            return Ok(expens);
        }

        // PUT: api/Expens/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutExpens(int id, Expens expens)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != expens.EID)
            {
                return BadRequest();
            }

            db.Entry(expens).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpensExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Expens
        [ResponseType(typeof(Expens))]
        public IHttpActionResult PostExpens(Expens[] expens)
        {
           
            foreach(var item in expens)
            {
                db.Expenses.Add(item);
            }
            db.SaveChanges();

            return Ok();
        }

        // DELETE: api/Expens/5
        [ResponseType(typeof(Expens))]
        public IHttpActionResult DeleteExpens(int id)
        {
            Expens expens = db.Expenses.Find(id);
            if (expens == null)
            {
                return NotFound();
            }

            db.Expenses.Remove(expens);
            db.SaveChanges();

            return Ok(expens);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ExpensExists(int id)
        {
            return db.Expenses.Count(e => e.EID == id) > 0;
        }
    }
}