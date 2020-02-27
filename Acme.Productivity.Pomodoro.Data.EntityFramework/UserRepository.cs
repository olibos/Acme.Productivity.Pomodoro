// <copyright file="UserRepository.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;

    using Acme.Productivity.Pomodoro.Core;
    using Acme.Productivity.Pomodoro.Core.Tools;
    using Acme.Productivity.Pomodoro.Data.EntityFramework.Model;

    using AutoMapper;

    /// <summary>
    /// The repository for the users.
    /// </summary>
    public class UserRepository : IUserRepository
    {
        private readonly PomodoroContext context;
        private readonly IMapper mapper;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserRepository"/> class.
        /// </summary>
        /// <param name="context">The database context.</param>
        /// <param name="mapper">The auto mapper instance.</param>
        public UserRepository(PomodoroContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        /// <inheritdoc />
        public async Task<AuthenticatedUser> AuthenticateAsync(string userName, string password)
        {
            var userDb = this.context.Users.SingleOrDefault(x => x.UserName == userName);

            if (userDb == null)
            {
                userDb = new User
                {
                    Id = SecurityEngine.GenerateId(),
                    UserName = userName,
                    Password = SecurityEngine.HashPassword(password),
                    CreationDate = DateTime.UtcNow,
                    LastLoginDate = DateTime.UtcNow,
                };

                this.context.Users.Add(userDb);
                await this.context.SaveChangesAsync();
                return this.mapper.Map<AuthenticatedUser>(userDb);
            }

            if (SecurityEngine.VerifyPassword(password, userDb.Password))
            {
                userDb.LastLoginDate = DateTime.UtcNow;
                await this.context.SaveChangesAsync();
                return this.mapper.Map<AuthenticatedUser>(userDb);
            }

            return null;
        }
    }
}