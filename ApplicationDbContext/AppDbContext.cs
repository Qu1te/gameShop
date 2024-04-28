using Microsoft.EntityFrameworkCore;
using EFGetStarted.Models;

namespace EFGetStarted.ApplicationDbContext
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

		public DbSet<Users> Users { get; set; }
	}
}